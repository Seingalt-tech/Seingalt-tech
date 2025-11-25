'use client';

import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { PageHeader } from '@/components/PageHeader';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';
import { chaptersApi } from '@/lib/api';
import { Chapter } from '@/types';
import { ChevronDown, ChevronRight, FileText } from 'lucide-react';
import { cn, getStatusBadgeClass, translateStatus } from '@/lib/utils';

export default function AtelierPage() {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    loadChapters();
  }, []);

  const loadChapters = async () => {
    try {
      setLoading(true);
      setError(null);
      const response: any = await chaptersApi.getAll();
      setChapters(response.data || []);
    } catch (err: any) {
      setError(err.message || 'Erreur lors du chargement des chapitres');
    } finally {
      setLoading(false);
    }
  };

  const toggleChapter = (chapterId: string) => {
    const newExpanded = new Set(expandedChapters);
    if (newExpanded.has(chapterId)) {
      newExpanded.delete(chapterId);
    } else {
      newExpanded.add(chapterId);
    }
    setExpandedChapters(newExpanded);
  };

  return (
    <DashboardLayout>
      <PageHeader
        title="Atelier d'écriture"
        description="Gérez vos chapitres et scènes"
      />

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && chapters.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">
            Aucun chapitre trouvé. Configurez votre base Notion pour commencer.
          </p>
        </div>
      )}

      {!loading && !error && chapters.length > 0 && (
        <div className="space-y-4">
          {chapters.map((chapter) => {
            const isExpanded = expandedChapters.has(chapter.id);
            const statusBadge = getStatusBadgeClass(chapter.status);

            return (
              <div key={chapter.id} className="card overflow-hidden">
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-gray-400">
                        {isExpanded ? (
                          <ChevronDown className="w-5 h-5" />
                        ) : (
                          <ChevronRight className="w-5 h-5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {chapter.title}
                          </h3>
                          <span
                            className={cn(
                              'px-2 py-1 text-xs font-medium rounded',
                              statusBadge.bg,
                              statusBadge.text
                            )}
                          >
                            {translateStatus(chapter.status)}
                          </span>
                        </div>
                        {chapter.description && (
                          <p className="text-sm text-gray-600">
                            {chapter.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 ml-4">
                      {chapter.scenes.length} scène
                      {chapter.scenes.length > 1 ? 's' : ''}
                    </div>
                  </div>
                </button>

                {isExpanded && chapter.scenes.length > 0 && (
                  <div className="border-t border-gray-200 bg-gray-50">
                    <div className="p-6 space-y-3">
                      {chapter.scenes.map((scene) => {
                        const sceneStatusBadge = getStatusBadgeClass(
                          scene.status
                        );

                        return (
                          <div
                            key={scene.id}
                            className="bg-white p-4 rounded-lg border border-gray-200"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-medium text-gray-900">
                                {scene.title}
                              </h4>
                              <span
                                className={cn(
                                  'px-2 py-1 text-xs font-medium rounded',
                                  sceneStatusBadge.bg,
                                  sceneStatusBadge.text
                                )}
                              >
                                {translateStatus(scene.status)}
                              </span>
                            </div>
                            {scene.content && (
                              <p className="text-sm text-gray-600 line-clamp-3">
                                {scene.content}
                              </p>
                            )}
                            {scene.wordCount && (
                              <div className="mt-2 text-xs text-gray-500">
                                {scene.wordCount} mots
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </DashboardLayout>
  );
}
