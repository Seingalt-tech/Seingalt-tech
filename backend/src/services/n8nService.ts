import axios from 'axios';
import { config } from '../config';

interface WorkflowTriggerParams {
  workflowId: string;
  data: any;
}

interface WorkflowExecution {
  id: string;
  workflowId: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  input: any;
  output: any;
  createdAt: Date;
}

/**
 * Service pour interagir avec N8N
 */
class N8NService {
  private baseUrl: string;
  private executions: Map<string, WorkflowExecution>;

  constructor() {
    this.baseUrl = config.n8n.baseUrl;
    this.executions = new Map();
  }

  /**
   * Déclenche un workflow N8N
   */
  async triggerWorkflow({ workflowId, data }: WorkflowTriggerParams): Promise<WorkflowExecution> {
    try {
      const executionId = this.generateExecutionId();
      const webhookUrl = this.getWorkflowWebhookUrl(workflowId);

      // Créer l'exécution
      const execution: WorkflowExecution = {
        id: executionId,
        workflowId,
        status: 'pending',
        input: data,
        output: null,
        createdAt: new Date(),
      };

      this.executions.set(executionId, execution);

      // Déclencher le workflow via webhook (asynchrone)
      this.executeWorkflow(executionId, webhookUrl, data);

      return execution;
    } catch (error) {
      console.error('Erreur lors du déclenchement du workflow:', error);
      throw error;
    }
  }

  /**
   * Exécute réellement le workflow (appel asynchrone)
   */
  private async executeWorkflow(executionId: string, webhookUrl: string, data: any) {
    const execution = this.executions.get(executionId);
    if (!execution) return;

    try {
      execution.status = 'running';

      const response = await axios.post(
        webhookUrl,
        { ...data, executionId },
        {
          headers: {
            'Content-Type': 'application/json',
            ...(config.n8n.apiKey && { 'X-N8N-API-KEY': config.n8n.apiKey }),
          },
          timeout: 60000, // 60 secondes
        }
      );

      execution.status = 'completed';
      execution.output = response.data;
    } catch (error: any) {
      console.error('Erreur lors de l\'exécution du workflow:', error);
      execution.status = 'failed';
      execution.output = {
        error: error.message,
        details: error.response?.data,
      };
    }
  }

  /**
   * Récupère le statut d'une exécution
   */
  async getExecutionStatus(executionId: string): Promise<WorkflowExecution | null> {
    return this.executions.get(executionId) || null;
  }

  /**
   * Liste toutes les exécutions
   */
  async listExecutions(): Promise<WorkflowExecution[]> {
    return Array.from(this.executions.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  /**
   * Génère un ID unique pour l'exécution
   */
  private generateExecutionId(): string {
    return `exec_${Date.now()}_${Math.random().toString(36).substring(7)}`;
  }

  /**
   * Construit l'URL du webhook pour un workflow
   */
  private getWorkflowWebhookUrl(workflowId: string): string {
    // Si une URL de webhook personnalisée est configurée, l'utiliser
    if (config.n8n.webhookUrl) {
      return `${config.n8n.webhookUrl}/${workflowId}`;
    }
    // Sinon, utiliser l'URL par défaut
    return `${this.baseUrl}/webhook/${workflowId}`;
  }

  /**
   * Liste les workflows disponibles (statique pour la v0.1)
   */
  async listWorkflows() {
    return [
      {
        id: 'style-evaluation',
        name: 'Évaluation de style',
        description: 'Analyse le style d\'une scène et fournit un score avec des suggestions',
        type: 'style_evaluation',
        webhookUrl: this.getWorkflowWebhookUrl('style-evaluation'),
        enabled: true,
      },
      {
        id: 'alternative-generation',
        name: 'Génération d\'alternatives',
        description: 'Génère des variantes d\'une scène selon une direction donnée',
        type: 'alternative_generation',
        webhookUrl: this.getWorkflowWebhookUrl('alternative-generation'),
        enabled: true,
      },
    ];
  }
}

export const n8nService = new N8NService();
