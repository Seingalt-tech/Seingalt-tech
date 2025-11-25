import { Client } from '@notionhq/client';
import { config } from '../config';

/**
 * Service pour interagir avec l'API Notion
 */
class NotionService {
  private client: Client;

  constructor() {
    this.client = new Client({
      auth: config.notion.apiKey,
    });
  }

  /**
   * Récupère tous les personnages depuis Notion
   */
  async getCharacters() {
    try {
      if (!config.notion.databaseIds.characters) {
        throw new Error('ID de la base de données Notion Characters non configuré');
      }

      const response = await this.client.databases.query({
        database_id: config.notion.databaseIds.characters,
      });

      return response.results.map((page: any) => ({
        id: page.id,
        name: page.properties.Name?.title?.[0]?.plain_text || '',
        description: page.properties.Description?.rich_text?.[0]?.plain_text || '',
        avatar: page.properties.Avatar?.files?.[0]?.file?.url || page.properties.Avatar?.files?.[0]?.external?.url || '',
        role: page.properties.Role?.select?.name || '',
        traits: page.properties.Traits?.multi_select?.map((t: any) => t.name) || [],
      }));
    } catch (error) {
      console.error('Erreur lors de la récupération des personnages:', error);
      throw error;
    }
  }

  /**
   * Récupère tous les chapitres avec leurs scènes
   */
  async getChapters() {
    try {
      if (!config.notion.databaseIds.chapters) {
        throw new Error('ID de la base de données Notion Chapters non configuré');
      }

      const response = await this.client.databases.query({
        database_id: config.notion.databaseIds.chapters,
        sorts: [
          {
            property: 'Order',
            direction: 'ascending',
          },
        ],
      });

      const chapters = await Promise.all(
        response.results.map(async (page: any) => {
          const scenes = await this.getScenesByChapter(page.id);
          return {
            id: page.id,
            title: page.properties.Title?.title?.[0]?.plain_text || '',
            status: page.properties.Status?.select?.name || 'draft',
            order: page.properties.Order?.number || 0,
            description: page.properties.Description?.rich_text?.[0]?.plain_text || '',
            scenes,
          };
        })
      );

      return chapters;
    } catch (error) {
      console.error('Erreur lors de la récupération des chapitres:', error);
      throw error;
    }
  }

  /**
   * Récupère les scènes d'un chapitre spécifique
   */
  async getScenesByChapter(chapterId: string) {
    try {
      if (!config.notion.databaseIds.scenes) {
        return [];
      }

      const response = await this.client.databases.query({
        database_id: config.notion.databaseIds.scenes,
        filter: {
          property: 'Chapter',
          relation: {
            contains: chapterId,
          },
        },
        sorts: [
          {
            property: 'Order',
            direction: 'ascending',
          },
        ],
      });

      return response.results.map((page: any) => ({
        id: page.id,
        title: page.properties.Title?.title?.[0]?.plain_text || '',
        content: page.properties.Content?.rich_text?.[0]?.plain_text || '',
        status: page.properties.Status?.select?.name || 'draft',
        chapter: chapterId,
        order: page.properties.Order?.number || 0,
        wordCount: page.properties.WordCount?.number || 0,
        notes: page.properties.Notes?.rich_text?.[0]?.plain_text || '',
      }));
    } catch (error) {
      console.error('Erreur lors de la récupération des scènes:', error);
      throw error;
    }
  }

  /**
   * Récupère la timeline depuis Notion
   */
  async getTimeline() {
    try {
      if (!config.notion.databaseIds.timeline) {
        throw new Error('ID de la base de données Notion Timeline non configuré');
      }

      const response = await this.client.databases.query({
        database_id: config.notion.databaseIds.timeline,
        sorts: [
          {
            property: 'Date',
            direction: 'ascending',
          },
        ],
      });

      return response.results.map((page: any) => ({
        id: page.id,
        title: page.properties.Title?.title?.[0]?.plain_text || '',
        description: page.properties.Description?.rich_text?.[0]?.plain_text || '',
        date: page.properties.Date?.date?.start || '',
        type: page.properties.Type?.select?.name || 'event',
      }));
    } catch (error) {
      console.error('Erreur lors de la récupération de la timeline:', error);
      throw error;
    }
  }
}

export const notionService = new NotionService();
