import styles from '../../styles/hero.module.css';



export default function Homes() {
  return (
    <div className={styles.hero_section}>
        <button className={styles.btn_contact}>CONTACTEZ-NOUS</button>
       <h1 className={styles.title_hero}>NOOVA STUDIO</h1>
       <p className={styles.paragraphe_hero}>Agence Creative-
       Basé à Madagascar</p>
    </div>
  );
}
