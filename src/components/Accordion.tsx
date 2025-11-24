'use client';

import { useState } from 'react';
import './Accordion.css';

export interface AccordionItem {
  id: string;
  title: string;
  content: string | React.ReactNode;
  emoji?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenIds?: string[];
}

export default function Accordion({ items, allowMultiple = false, defaultOpenIds = [] }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

  const toggleItem = (id: string) => {
    setOpenIds(prev => {
      const isOpen = prev.includes(id);

      if (allowMultiple) {
        return isOpen ? prev.filter(openId => openId !== id) : [...prev, id];
      } else {
        return isOpen ? [] : [id];
      }
    });
  };

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div key={item.id} className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <button
              className="accordion-header"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
            >
              {item.emoji && <span className="accordion-emoji">{item.emoji}</span>}
              <span className="accordion-title">{item.title}</span>
              <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
            </button>

            <div className="accordion-content">
              <div className="accordion-content-inner">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
