import { Router, Request, Response } from 'express';
import { notionService } from '../services/notionService';
import { createError } from '../middleware/errorHandler';

const router = Router();

/**
 * GET /api/characters
 * Récupère tous les personnages depuis Notion
 */
router.get('/', async (req: Request, res: Response, next) => {
  try {
    const characters = await notionService.getCharacters();

    res.json({
      success: true,
      data: characters,
    });
  } catch (error: any) {
    next(createError(error.message || 'Erreur lors de la récupération des personnages', 500));
  }
});

export default router;
