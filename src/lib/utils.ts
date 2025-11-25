import { type ClassValue, clsx } from 'clsx';

/**
 * Utilitaire pour combiner des classes CSS
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Formatte une date en français
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

/**
 * Formatte une date et heure
 */
export function formatDateTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d);
}

/**
 * Tronque un texte avec ellipsis
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

/**
 * Compte les mots dans un texte
 */
export function countWords(text: string): number {
  return text.trim().split(/\s+/).length;
}

/**
 * Badge de status
 */
export function getStatusBadgeClass(
  status: string
): {
  bg: string;
  text: string;
} {
  const statusMap: Record<string, { bg: string; text: string }> = {
    draft: { bg: 'bg-gray-100', text: 'text-gray-800' },
    reviewing: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
    validated: { bg: 'bg-green-100', text: 'text-green-800' },
    completed: { bg: 'bg-blue-100', text: 'text-blue-800' },
    in_progress: { bg: 'bg-purple-100', text: 'text-purple-800' },
    pending: { bg: 'bg-orange-100', text: 'text-orange-800' },
    running: { bg: 'bg-blue-100', text: 'text-blue-800' },
    failed: { bg: 'bg-red-100', text: 'text-red-800' },
  };

  return statusMap[status] || { bg: 'bg-gray-100', text: 'text-gray-800' };
}

/**
 * Traduction des statuts
 */
export function translateStatus(status: string): string {
  const translations: Record<string, string> = {
    draft: 'Brouillon',
    reviewing: 'En révision',
    validated: 'Validé',
    completed: 'Terminé',
    in_progress: 'En cours',
    pending: 'En attente',
    running: 'En cours',
    failed: 'Échoué',
  };

  return translations[status] || status;
}
