'use client';

import Accordion, { AccordionItem } from './Accordion';
import './Principles.css';

const principles: AccordionItem[] = [
  {
    id: '1',
    emoji: '1️⃣',
    title: 'Humain = Directeur Créatif',
    content: 'L\'humain est le responsable et le directeur créatif de toute création. C\'est lui qui définit la vision, prend les décisions et assume la responsabilité du résultat final.'
  },
  {
    id: '2',
    emoji: '2️⃣',
    title: 'IA = Instrument',
    content: 'L\'IA est un instrument au service de l\'humain, comparable au Maquet dans l\'atelier d\'un artiste. Elle exécute, assiste et facilite le processus créatif sans jamais remplacer la vision humaine.'
  },
  {
    id: '3',
    emoji: '3️⃣',
    title: 'Transparence = Fondation',
    content: 'La transparence est la fondation de toute création assistée par IA. Le processus doit être documenté et communiqué clairement pour établir la confiance et la légitimité.'
  },
  {
    id: '4',
    emoji: '4️⃣',
    title: 'Lecteur = Juge Final',
    content: 'Le lecteur est le juge final qui choisit ce qu\'il souhaite lire. C\'est sa décision qui compte, indépendamment de la méthode de création utilisée.'
  },
  {
    id: '5',
    emoji: '5️⃣',
    title: 'Qualité = Critère Unique',
    content: 'La qualité est le seul critère qui compte, pas la méthode utilisée pour l\'atteindre. Une œuvre de qualité reste valable quelle que soit sa méthode de création.'
  },
  {
    id: '6',
    emoji: '6️⃣',
    title: 'Authenticité = Vision Incarnée',
    content: 'L\'authenticité réside dans la vision incarnée par l\'œuvre, pas dans le processus technique. C\'est la sincérité et l\'originalité de la vision qui créent l\'authenticité.'
  },
  {
    id: '7',
    emoji: '7️⃣',
    title: 'Légitimité = Par Défaut',
    content: 'La légitimité est acquise par défaut dès lors que la transparence est respectée. Une création transparente sur son processus n\'a pas à justifier sa légitimité.'
  }
];

const faqItems: AccordionItem[] = [
  {
    id: 'faq-1',
    title: 'Q: "C\'est pas toi qui écris ?"',
    content: 'Si, c\'est bien moi qui écris. L\'IA est mon instrument, comme le Maquet pour un artiste. Je conçois, je dirige, je décide de chaque élément. L\'outil ne remplace pas la vision créative, il la sert.'
  },
  {
    id: 'faq-2',
    title: 'Q: "C\'est moins authentique ?"',
    content: 'L\'authenticité ne dépend pas de l\'outil, mais de la vision incarnée dans l\'œuvre. Un tableau peint avec un pinceau n\'est pas plus authentique qu\'un autre créé avec un aérographe. Ce qui compte, c\'est la sincérité de la vision et la qualité du résultat.'
  },
  {
    id: 'faq-3',
    title: 'Q: "L\'IA pense/crée ?"',
    content: 'Non, l\'IA ne pense pas et ne crée pas. Elle traite des données, génère des patterns, et propose des outputs basés sur ses entraînements. La pensée, la créativité, et la responsabilité restent entièrement humaines.'
  }
];

export default function Principles() {
  return (
    <div className="principles-container">
      <div className="principles-section">
        <h2 className="principles-title">Les 7 Principes</h2>
        <p className="principles-subtitle">Scroll vertical - Accordion</p>
        <Accordion items={principles} allowMultiple={true} />
      </div>

      <div className="faq-section">
        <h2 className="faq-title">FAQ</h2>
        <p className="faq-subtitle">Cliquez pour développer</p>
        <Accordion items={faqItems} allowMultiple={false} />
      </div>
    </div>
  );
}
