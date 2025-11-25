import { Router, Request, Response } from 'express';
import { n8nService } from '../services/n8nService';
import { createError } from '../middleware/errorHandler';

const router = Router();

/**
 * GET /api/workflows
 * Liste tous les workflows disponibles
 */
router.get('/', async (req: Request, res: Response, next) => {
  try {
    const workflows = await n8nService.listWorkflows();

    res.json({
      success: true,
      data: workflows,
    });
  } catch (error: any) {
    next(createError(error.message || 'Erreur lors de la récupération des workflows', 500));
  }
});

/**
 * POST /api/workflows/:workflowId/trigger
 * Déclenche un workflow spécifique
 */
router.post('/:workflowId/trigger', async (req: Request, res: Response, next) => {
  try {
    const { workflowId } = req.params;
    const data = req.body;

    if (!workflowId) {
      throw createError('ID du workflow requis', 400);
    }

    const execution = await n8nService.triggerWorkflow({ workflowId, data });

    res.json({
      success: true,
      data: execution,
      message: 'Workflow déclenché avec succès',
    });
  } catch (error: any) {
    next(createError(error.message || 'Erreur lors du déclenchement du workflow', 500));
  }
});

/**
 * GET /api/workflows/executions/:executionId/status
 * Récupère le statut d'une exécution
 */
router.get('/executions/:executionId/status', async (req: Request, res: Response, next) => {
  try {
    const { executionId } = req.params;

    if (!executionId) {
      throw createError('ID de l\'exécution requis', 400);
    }

    const execution = await n8nService.getExecutionStatus(executionId);

    if (!execution) {
      throw createError('Exécution non trouvée', 404);
    }

    res.json({
      success: true,
      data: execution,
    });
  } catch (error: any) {
    next(createError(error.message || 'Erreur lors de la récupération du statut', 500));
  }
});

/**
 * GET /api/workflows/executions
 * Liste toutes les exécutions
 */
router.get('/executions', async (req: Request, res: Response, next) => {
  try {
    const executions = await n8nService.listExecutions();

    res.json({
      success: true,
      data: executions,
    });
  } catch (error: any) {
    next(createError(error.message || 'Erreur lors de la récupération des exécutions', 500));
  }
});

export default router;
