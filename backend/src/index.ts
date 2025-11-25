import express, { Request, Response } from 'express';
import cors from 'cors';
import { config } from './config';
import { authMiddleware } from './middleware/auth';
import { errorHandler } from './middleware/errorHandler';

// Routes
import charactersRouter from './routes/characters';
import chaptersRouter from './routes/chapters';
import timelineRouter from './routes/timeline';
import workflowsRouter from './routes/workflows';

const app = express();

// ==================== Middlewares ====================
app.use(cors({
  origin: config.cors.origin,
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger simple
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// ==================== Routes publiques ====================
app.get('/', (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'La Boîte à Écrire API',
    version: '0.1.0',
    endpoints: {
      characters: '/api/characters',
      chapters: '/api/chapters',
      timeline: '/api/timeline',
      workflows: '/api/workflows',
    },
  });
});

app.get('/health', (_req: Request, res: Response) => {
  res.json({
    success: true,
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
});

// ==================== Routes protégées ====================
// Toutes les routes /api/* nécessitent une authentification
app.use('/api', authMiddleware);

app.use('/api/characters', charactersRouter);
app.use('/api/chapters', chaptersRouter);
app.use('/api/timeline', timelineRouter);
app.use('/api/workflows', workflowsRouter);

// ==================== Gestion des erreurs ====================
// Route 404
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: 'Route non trouvée',
  });
});

// Gestionnaire d'erreurs global
app.use(errorHandler);

// ==================== Démarrage du serveur ====================
const PORT = config.port;

app.listen(PORT, () => {
  console.log('');
  console.log('╔══════════════════════════════════════════╗');
  console.log('║   La Boîte à Écrire - Backend API       ║');
  console.log('╚══════════════════════════════════════════╝');
  console.log('');
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`🌍 Environnement: ${config.nodeEnv}`);
  console.log(`🔗 URL: http://localhost:${PORT}`);
  console.log(`📚 API Docs: http://localhost:${PORT}/`);
  console.log('');
  console.log('Routes disponibles:');
  console.log('  GET  /health                          - Health check');
  console.log('  GET  /api/characters                  - Personnages');
  console.log('  GET  /api/chapters                    - Chapitres');
  console.log('  GET  /api/timeline                    - Timeline');
  console.log('  GET  /api/workflows                   - Workflows');
  console.log('  POST /api/workflows/:id/trigger       - Déclencher workflow');
  console.log('  GET  /api/workflows/executions/:id    - Statut exécution');
  console.log('');
  console.log('💡 Utilisez x-api-key dans les headers pour authentification');
  console.log('');
});

export default app;
