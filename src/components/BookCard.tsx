import React from 'react';
import styles from './BookCard.module.css';

export default function BookCard() {
  return (
    <div className={styles.bookCard}>
      {/* Header Section */}
      <div className={styles.header}>
        <h2 className={styles.title}>La Conjuration des Nymphes</h2>
        <div className={styles.divider}></div>

        <div className={styles.headerContent}>
          <div className={styles.coverSection}>
            <div className={styles.coverPlaceholder}>
              <span className={styles.coverLabel}>COUVERTURE</span>
              <span className={styles.coverText}>Art original</span>
              <span className={styles.coverYear}>2025</span>
            </div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.orchestration}>
              <strong>ORCHESTRATION IA</strong>
              <p>(Claude, ChatGPT, Gemini)</p>
            </div>
            <button className={styles.freeReadBtn}>LIRE GRATUIT</button>
          </div>
        </div>
      </div>

      {/* Formats Section */}
      <div className={styles.formatsHeader}>
        <h3>4 FORMATS DE VENTE</h3>
      </div>

      <div className={styles.formats}>
        {/* Feuilleton Format */}
        <div className={styles.format}>
          <div className={styles.formatIcon}>📖</div>
          <h4>FEUILLETON</h4>
          <p className={styles.price}>Gratuit</p>
          <div className={styles.formatDetails}>
            <p>Substack</p>
            <p>16 semaines</p>
            <p>Hebdomadaire</p>
          </div>
          <button className={styles.actionBtn}>LIRE EPIS 1</button>
        </div>

        {/* EPUB Format */}
        <div className={styles.format}>
          <div className={styles.formatIcon}>📱</div>
          <h4>EPUB</h4>
          <p className={styles.price}>6,99€</p>
          <div className={styles.formatDetails}>
            <p>Amazon</p>
            <p>Apple</p>
            <p>Kobo</p>
          </div>
          <button className={styles.actionBtn}>ACHETER</button>
        </div>

        {/* PDF Format */}
        <div className={styles.format}>
          <div className={styles.formatIcon}>📄</div>
          <h4>PDF</h4>
          <p className={styles.price}>3,99€</p>
          <div className={styles.formatDetails}>
            <p>Direct</p>
            <p>Site</p>
            <p>Gumroad</p>
          </div>
          <button className={styles.actionBtn}>ACHETER</button>
        </div>

        {/* Collector Format */}
        <div className={styles.format}>
          <div className={styles.formatIcon}>📖</div>
          <h4>COLLECTOR</h4>
          <p className={styles.price}>24,99€</p>
          <div className={styles.formatDetails}>
            <p>Tirage 750</p>
            <p>Numéroté</p>
            <p>Papier</p>
          </div>
          <button className={styles.actionBtn}>COMMANDER</button>
        </div>
      </div>

      {/* Bonus Section */}
      <div className={styles.bonus}>
        <h4>BONUS:</h4>
        <ul>
          <li>3 Extraits</li>
          <li>Processus IA (timeline)</li>
          <li>Avis lecteurs</li>
        </ul>
      </div>
    </div>
  );
}
