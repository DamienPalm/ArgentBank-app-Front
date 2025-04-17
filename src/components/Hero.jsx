import "../styles/Hero.css";

export function Hero() {
  return (
    <div className="main__hero">
      <section className="main__hero__heroContent">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="main__hero__heroContent__subtitle">No fees.</p>
        <p className="main__hero__heroContent__subtitle">No minimum deposit.</p>
        <p className="main__hero__heroContent__subtitle">
          High interest rates.
        </p>
        <p className="main__hero__heroContent__text">
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
}
