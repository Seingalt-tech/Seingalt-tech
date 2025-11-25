import { Router, Request, Response } from 'express';
import { notionService } from '../services/notionService';
import { createError } from '../middleware/errorHandler';

const router = Router();

/**
 * GET /api/chapters
 * Récupère tous les chapitres avec leurs scènes
 */
router.get('/', async (req: Request, res: Response, next) => {
  try {
    const chapters = await notionService.getChapters();

    res.json({
      success: true,
      data: chapters,
    });
  } catch (error: any) {
    next(createError(error.message || 'Erreur lors de la récupération des chapitres', 500));
  }
});

export default router;
