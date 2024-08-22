import styles from "./styles.module.css";

function CityCard({ name, description, imageUrl, facts }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.city__name}>{name}</h3>
      <img src={imageUrl} alt={name} className={styles.city__image} />
      <p>{description}</p>
      <ul>
        {facts.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;
