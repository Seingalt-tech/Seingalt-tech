'use client';

import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { PageHeader } from '@/components/PageHeader';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';
import { charactersApi } from '@/lib/api';
import { Character } from '@/types';
import { User } from 'lucide-react';

export default function PersonnagesPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    try {
      setLoading(true);
      setError(null);
      const response: any = await charactersApi.getAll();
      setCharacters(response.data || []);
    } catch (err: any) {
      setError(err.message || 'Erreur lors du chargement des personnages');
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <PageHeader
        title="Personnages"
        description="Explorez les personnages de votre histoire"
      />

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && characters.length === 0 && (
        <div className="text-center py-12">
          <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">
            Aucun personnage trouvé. Configurez votre base Notion pour
            commencer.
          </p>
        </div>
      )}

      {!loading && !error && characters.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character) => (
            <div key={character.id} className="card p-6">
              <div className="flex items-start gap-4 mb-4">
                {character.avatar ? (
                  <img
                    src={character.avatar}
                    alt={character.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-400" />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {character.name}
                  </h3>
                  {character.role && (
                    <p className="text-sm text-primary-600 font-medium">
                      {character.role}
                    </p>
                  )}
                </div>
              </div>

              {character.description && (
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {character.description}
                </p>
              )}

              {character.traits && character.traits.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {character.traits.map((trait, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
}
