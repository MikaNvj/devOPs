import styles from '../../styles/footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer_section}>
        <div className={styles.footer_container}>
            <div className={styles.footer_top}>
                <p>Creative Design Agency</p>
                <h3>NOOVA STUDIO</h3>
                <p>Based in Madagascar</p>
            </div>
            <div className={styles.footer_center}>
                <h1>Let's work together</h1>
                <div className={styles.footer_form}>
                <form>
                    <input placeholder='Nom'></input>
                    <input placeholder='Email'></input>
                    <input placeholder='Message'></input>
                </form>
                <button>Get in touch</button>
                </div>
                
            </div>
            <div className={styles.footer_top}>
                <p>created by Mika NIVOARIJAONA</p>
                
                <p>Based in Madagascar</p>
            </div>
        </div>
       
    </div>
  );
}
