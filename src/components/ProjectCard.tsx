import Link from 'next/link'
import { Project } from '@/types/project'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
}

const statusLabels: Record<Project['status'], string> = {
  'en-cours': 'En cours',
  planifie: 'Planifié',
  complete: 'Terminé',
  'en-pause': 'En pause',
}

const statusColors: Record<Project['status'], string> = {
  'en-cours': '#3498db',
  planifie: '#95a5a6',
  complete: '#27ae60',
  'en-pause': '#e67e22',
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-status" style={{ backgroundColor: statusColors[project.status] }}>
          {statusLabels[project.status]}
        </span>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-meta">
        <div className="project-tags">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="project-tag">
              #{tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="project-tag-more">+{project.tags.length - 3}</span>
          )}
        </div>

        {project.progress !== undefined && (
          <div className="project-progress-container">
            <div className="project-progress-bar">
              <div className="project-progress-fill" style={{ width: `${project.progress}%` }} />
            </div>
            <span className="project-progress-text">{project.progress}%</span>
          </div>
        )}
      </div>
    </Link>
  )
}
