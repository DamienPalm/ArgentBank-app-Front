import "../styles/Hero.css";

export function Hero() {
  return (
    <div className="hero">
      <section className="hero__heroContent">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="hero__heroContent__subtitle">No fees.</p>
        <p className="hero__heroContent__subtitle">No minimum deposit.</p>
        <p className="hero__heroContent__subtitle">High interest rates.</p>
        <p className="hero__heroContent__text">
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
}
