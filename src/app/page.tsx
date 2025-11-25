import { DashboardLayout } from '@/components/DashboardLayout';
import { PageHeader } from '@/components/PageHeader';
import { BookOpen, Users, Workflow } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Bienvenue sur La boîte à écrire"
        description="Plateforme de littérature augmentée - Version Beta"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/atelier"
          className="card p-6 hover:shadow-xl transition-shadow cursor-pointer"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-primary-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Atelier</h2>
          </div>
          <p className="text-gray-600">
            Gérez vos chapitres et scènes, évaluez le style et générez des
            alternatives.
          </p>
        </Link>

        <Link
          href="/personnages"
          className="card p-6 hover:shadow-xl transition-shadow cursor-pointer"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Personnages</h2>
          </div>
          <p className="text-gray-600">
            Explorez vos personnages, leurs traits et leur évolution dans
            l'histoire.
          </p>
        </Link>

        <Link
          href="/workflows"
          className="card p-6 hover:shadow-xl transition-shadow cursor-pointer"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Workflow className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Workflows</h2>
          </div>
          <p className="text-gray-600">
            Déclenchez des workflows IA pour améliorer et analyser votre
            contenu.
          </p>
        </Link>
      </div>

      <div className="mt-12 card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          À propos de cette version
        </h3>
        <div className="text-gray-600 space-y-2">
          <p>
            Cette version beta de La boîte à écrire vous permet de gérer votre
            projet littéraire avec l'aide de l'intelligence artificielle.
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Synchronisation avec Notion pour vos données</li>
            <li>Workflows N8N pour l'analyse et la génération de contenu</li>
            <li>Interface intuitive pour naviguer dans votre univers</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
