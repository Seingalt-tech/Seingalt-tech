import { Router, Request, Response } from 'express';
import { notionService } from '../services/notionService';
import { createError } from '../middleware/errorHandler';

const router = Router();

/**
 * GET /api/timeline
 * Récupère la timeline depuis Notion
 */
router.get('/', async (req: Request, res: Response, next) => {
  try {
    const timeline = await notionService.getTimeline();

    res.json({
      success: true,
      data: timeline,
    });
  } catch (error: any) {
    next(createError(error.message || 'Erreur lors de la récupération de la timeline', 500));
  }
});

export default router;
