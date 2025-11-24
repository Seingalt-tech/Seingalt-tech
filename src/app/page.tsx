import StayConnected from '@/components/StayConnected';

export default function Home() {
  return (
    <main className="container">
      <div className="hero">
        <h1>La boite à écrire</h1>
        <p className="subtitle">Un espace dédié à l&apos;écriture et à la créativité littéraire</p>
      </div>

      <section className="content">
        <div className="card">
          <h2>Bienvenue</h2>
          <p>
            Bienvenue dans votre espace d&apos;écriture. Ici, vous pouvez laisser libre cours
            à votre créativité et explorer l&apos;univers des mots.
          </p>
        </div>

        <div className="card">
          <h2>Commencer</h2>
          <p>
            Explorez les différentes sections pour découvrir tout ce que La boite à écrire
            a à vous offrir.
          </p>
        </div>
      </section>

      <StayConnected />
    </main>
  )
}
