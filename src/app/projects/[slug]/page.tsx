import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects, getProjectBySlug } from '@/data/projects'
import './project-detail.css'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Projet introuvable | La boite à écrire',
    }
  }

  return {
    title: `${project.title} | La boite à écrire`,
    description: project.description,
  }
}

const statusLabels: Record<string, string> = {
  'en-cours': 'En cours',
  planifie: 'Planifié',
  complete: 'Terminé',
  'en-pause': 'En pause',
}

const categoryLabels: Record<string, string> = {
  fiction: 'Fiction',
  'non-fiction': 'Non-fiction',
  technique: 'Technique',
  recherche: 'Recherche',
  personnel: 'Personnel',
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="container">
      <div className="project-detail">
        <Link href="/projects" className="back-link">
          ← Retour aux projets
        </Link>

        <header className="project-detail-header">
          <div className="project-detail-meta">
            <span className="project-detail-category">{categoryLabels[project.category]}</span>
            <span className="project-detail-status">{statusLabels[project.status]}</span>
          </div>

          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-description">{project.description}</p>
        </header>

        {project.progress !== undefined && (
          <div className="project-detail-progress">
            <div className="progress-header">
              <span>Progression</span>
              <span className="progress-value">{project.progress}%</span>
            </div>
            <div className="progress-bar-large">
              <div className="progress-fill-large" style={{ width: `${project.progress}%` }} />
            </div>
          </div>
        )}

        {project.longDescription && (
          <section className="project-detail-section">
            <h2>À propos</h2>
            <p>{project.longDescription}</p>
          </section>
        )}

        {project.tags.length > 0 && (
          <section className="project-detail-section">
            <h2>Tags</h2>
            <div className="project-detail-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          </section>
        )}

        {project.links && Object.keys(project.links).length > 0 && (
          <section className="project-detail-section">
            <h2>Liens</h2>
            <div className="project-detail-links">
              {project.links.notion && (
                <a
                  href={project.links.notion}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  📝 Notion
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  💻 GitHub
                </a>
              )}
              {project.links.website && (
                <a
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  🌐 Site web
                </a>
              )}
            </div>
          </section>
        )}

        <section className="project-detail-section">
          <h2>Informations</h2>
          <dl className="project-detail-info">
            <div className="info-row">
              <dt>Date de début</dt>
              <dd>{new Date(project.startDate).toLocaleDateString('fr-FR')}</dd>
            </div>
            {project.endDate && (
              <div className="info-row">
                <dt>Date de fin</dt>
                <dd>{new Date(project.endDate).toLocaleDateString('fr-FR')}</dd>
              </div>
            )}
            <div className="info-row">
              <dt>Dernière mise à jour</dt>
              <dd>{new Date(project.updatedAt).toLocaleDateString('fr-FR')}</dd>
            </div>
          </dl>
        </section>
      </div>
    </main>
  )
}
