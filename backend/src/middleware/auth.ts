import { Request, Response, NextFunction } from 'express';
import { config } from '../config';

/**
 * Middleware d'authentification simple par API Key
 * Vérifie la présence et la validité de l'API key dans les headers
 */
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const apiKey = req.headers['x-api-key'] as string;

  if (!apiKey) {
    res.status(401).json({
      success: false,
      error: 'API key manquante',
      message: 'Veuillez fournir une API key dans le header x-api-key',
    });
    return;
  }

  if (apiKey !== config.apiKey) {
    res.status(403).json({
      success: false,
      error: 'API key invalide',
      message: 'L\'API key fournie n\'est pas valide',
    });
    return;
  }

  next();
};
