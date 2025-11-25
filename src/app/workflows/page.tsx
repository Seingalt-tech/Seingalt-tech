'use client';

import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { PageHeader } from '@/components/PageHeader';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';
import { workflowsApi } from '@/lib/api';
import { Workflow, WorkflowExecution } from '@/types';
import { Play, Clock, CheckCircle, XCircle, Loader } from 'lucide-react';
import { cn, getStatusBadgeClass, translateStatus, formatDateTime } from '@/lib/utils';

export default function WorkflowsPage() {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [executions, setExecutions] = useState<WorkflowExecution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [triggeringWorkflow, setTriggeringWorkflow] = useState<string | null>(
    null
  );

  useEffect(() => {
    loadWorkflows();
    loadExecutions();
  }, []);

  const loadWorkflows = async () => {
    try {
      setLoading(true);
      setError(null);
      const response: any = await workflowsApi.getAll();
      setWorkflows(response.data || []);
    } catch (err: any) {
      setError(err.message || 'Erreur lors du chargement des workflows');
    } finally {
      setLoading(false);
    }
  };

  const loadExecutions = async () => {
    try {
      const response: any = await workflowsApi.listExecutions();
      setExecutions(response.data || []);
    } catch (err: any) {
      console.error('Erreur lors du chargement des exécutions:', err);
    }
  };

  const handleTriggerWorkflow = async (workflowId: string) => {
    try {
      setTriggeringWorkflow(workflowId);
      const testData = {
        text: 'Exemple de texte à analyser...',
        direction: 'plus dramatique',
      };

      await workflowsApi.trigger(workflowId, testData);
      await loadExecutions();
    } catch (err: any) {
      setError(
        err.message || 'Erreur lors du déclenchement du workflow'
      );
    } finally {
      setTriggeringWorkflow(null);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-600" />;
      case 'running':
        return <Loader className="w-5 h-5 text-blue-600 animate-spin" />;
      default:
        return <Clock className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <DashboardLayout>
      <PageHeader
        title="Workflows IA"
        description="Déclenchez des workflows pour améliorer votre contenu"
      />

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <>
          {/* Liste des workflows disponibles */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Workflows disponibles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workflows.map((workflow) => (
                <div key={workflow.id} className="card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {workflow.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {workflow.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        'px-2 py-1 text-xs font-medium rounded',
                        workflow.enabled
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      )}
                    >
                      {workflow.enabled ? 'Actif' : 'Inactif'}
                    </span>

                    <button
                      onClick={() => handleTriggerWorkflow(workflow.id)}
                      disabled={
                        !workflow.enabled ||
                        triggeringWorkflow === workflow.id
                      }
                      className={cn(
                        'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors',
                        workflow.enabled
                          ? 'bg-primary-600 hover:bg-primary-700 text-white'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      )}
                    >
                      {triggeringWorkflow === workflow.id ? (
                        <>
                          <Loader className="w-4 h-4 animate-spin" />
                          Déclenchement...
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          Déclencher
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Historique des exécutions */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Historique des exécutions
            </h2>

            {executions.length === 0 ? (
              <div className="card p-6 text-center text-gray-500">
                Aucune exécution pour le moment. Déclenchez un workflow pour
                commencer.
              </div>
            ) : (
              <div className="space-y-3">
                {executions.map((execution) => {
                  const statusBadge = getStatusBadgeClass(execution.status);

                  return (
                    <div
                      key={execution.id}
                      className="card p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        {getStatusIcon(execution.status)}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="font-medium text-gray-900">
                              {execution.workflowName || execution.workflowId}
                            </h4>
                            <span
                              className={cn(
                                'px-2 py-1 text-xs font-medium rounded',
                                statusBadge.bg,
                                statusBadge.text
                              )}
                            >
                              {translateStatus(execution.status)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">
                            {formatDateTime(execution.createdAt)}
                          </p>
                        </div>
                      </div>

                      {execution.duration && (
                        <div className="text-sm text-gray-500">
                          {(execution.duration / 1000).toFixed(2)}s
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </>
      )}
    </DashboardLayout>
  );
}
