import { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import './projects.css'

export const metadata: Metadata = {
  title: 'Projets | La boite à écrire',
  description: "Découvrez mes projets d'écriture en cours et à venir",
}

export default function ProjectsPage() {
  const activeProjects = projects.filter((p) => p.status === 'en-cours')
  const plannedProjects = projects.filter((p) => p.status === 'planifie')
  const otherProjects = projects.filter((p) => p.status !== 'en-cours' && p.status !== 'planifie')

  return (
    <main className="container">
      <div className="hero">
        <h1>Mes Projets</h1>
        <p className="subtitle">
          Explorez mes projets d&apos;écriture, de la fiction à la recherche académique
        </p>
      </div>

      <div className="projects-content">
        {activeProjects.length > 0 && (
          <section className="projects-section">
            <h2 className="section-title">En cours</h2>
            <div className="projects-grid">
              {activeProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {plannedProjects.length > 0 && (
          <section className="projects-section">
            <h2 className="section-title">Planifiés</h2>
            <div className="projects-grid">
              {plannedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {otherProjects.length > 0 && (
          <section className="projects-section">
            <h2 className="section-title">Autres projets</h2>
            <div className="projects-grid">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
