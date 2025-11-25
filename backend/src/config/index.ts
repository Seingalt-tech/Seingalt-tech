import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV || 'development',

  // API Keys
  apiKey: process.env.API_KEY || 'dev-api-key-change-in-production',

  // Notion
  notion: {
    apiKey: process.env.NOTION_API_KEY || '',
    databaseIds: {
      characters: process.env.NOTION_DB_CHARACTERS || '',
      chapters: process.env.NOTION_DB_CHAPTERS || '',
      scenes: process.env.NOTION_DB_SCENES || '',
      timeline: process.env.NOTION_DB_TIMELINE || '',
    },
  },

  // N8N
  n8n: {
    baseUrl: process.env.N8N_BASE_URL || 'http://localhost:5678',
    webhookUrl: process.env.N8N_WEBHOOK_URL || '',
    apiKey: process.env.N8N_API_KEY || '',
  },

  // CORS
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  },
} as const;

export default config;
