import "../styles/Features.css";

export function Features({ icon, alt, title, text }) {
  return (
    <div className="main__features__featureItem">
      <img src={icon} alt={alt} className="main__features__featureItem__icon" />
      <h3 className="main__features__featureItem__title">{title}</h3>
      <p className="main__features__featureItem__text">{text}</p>
    </div>
  );
}
