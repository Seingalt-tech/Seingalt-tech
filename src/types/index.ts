/**
 * Types pour La Boîte à Écrire
 * Plateforme de littérature augmentée
 */

// ==================== Character ====================
export interface Character {
  id: string;
  name: string;
  description: string;
  avatar: string;
  role?: string;
  traits?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

// ==================== Scene ====================
export type SceneStatus = "draft" | "reviewing" | "validated";

export interface Scene {
  id: string;
  title: string;
  content: string;
  status: SceneStatus;
  chapter: string;
  order?: number;
  wordCount?: number;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// ==================== Chapter ====================
export type ChapterStatus = "draft" | "in_progress" | "reviewing" | "completed";

export interface Chapter {
  id: string;
  title: string;
  scenes: Scene[];
  status: ChapterStatus;
  order?: number;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// ==================== Timeline ====================
export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "event" | "milestone" | "character_intro";
  relatedChapters?: string[];
  relatedCharacters?: string[];
}

// ==================== Workflow ====================
export type WorkflowStatus = "pending" | "running" | "completed" | "failed";

export type WorkflowType =
  | "style_evaluation"
  | "alternative_generation"
  | "grammar_check"
  | "character_consistency"
  | "custom";

export interface WorkflowExecution {
  id: string;
  workflowId: string;
  workflowName?: string;
  workflowType?: WorkflowType;
  status: WorkflowStatus;
  input: any;
  output: any;
  error?: string;
  createdAt: Date;
  startedAt?: Date;
  completedAt?: Date;
  duration?: number; // in milliseconds
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  type: WorkflowType;
  webhookUrl: string;
  enabled: boolean;
  createdAt?: Date;
}

// ==================== API Responses ====================
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T = any> {
  success: boolean;
  data: T[];
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}

// ==================== Notion Integration ====================
export interface NotionPage {
  id: string;
  properties: Record<string, any>;
  createdTime: string;
  lastEditedTime: string;
}

// ==================== User & Auth ====================
export interface User {
  id: string;
  name: string;
  email: string;
  apiKey?: string;
  createdAt: Date;
}

export interface AuthContext {
  user: User | null;
  isAuthenticated: boolean;
}
