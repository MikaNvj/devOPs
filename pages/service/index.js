import styles from '../../styles/service.module.css';

export default function Services() {
  return (
    <div className={styles.service_section}>
       <h1 className={styles.title_service}>NOS SERVICES</h1>
       <div className={styles.service_wrap}>
        <button className={styles.btn_service}>Graphic design</button>
        <button className={styles.btn_service1}>Motion design</button>
        <button className={styles.btn_service1}>Web design</button>
        <button className={styles.btn_service}>Web develop</button>
       </div>
       
    </div>
  );
}
