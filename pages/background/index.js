// import styles from '../../styles/service.module.css';
import styles from '../../styles/accordion.module.css';

export default function Back() {
  return (
    <div className={styles.back_section}>
      <section className={styles.accordion}>
    <h2 className={styles.title_faq}>On répond à vos questions!</h2>
                    <p className={styles.paragraphe}>
                    Ici, nous avons rassemblé les réponses aux questions les plus fréquentes que vous pourriez vous poser. Vous trouverez ici les informations nécessaires pour mieux comprendre comment se déroule notre processus créatif et comment nous travaillons. Si vous avez d'autres questions, n'hésitez pas à nous contacter directement!
                    </p>
    <div className={styles.tab}>
        
        <input type="radio" name="accordion-2" id="rd2"/>
        <label for="rd2" className={styles.tab__label}>  Est-ce que vous travaillez avec des entreprises de toute taille ?</label>
        <div className={styles.tab__content}>
            <p>Absolument ! Nous collaborons avec des startups, des PME, et des grandes entreprises. Chaque projet est adapté pour répondre aux besoins spécifiques de votre organisation, quelle que soit sa taille.</p>
        </div>
    </div>
    <div className={styles.tab}>
        
        <input type="radio" name="accordion-2" id="rd3"/>
        <label for="rd3" className={styles.tab__label}> Combien de temps faut-il pour réaliser un projet ?</label>
        <div className={styles.tab__content}>
            <p>La durée d'un projet dépend de sa complexité. Un design graphique simple peut prendre quelques jours, tandis que la création d'un site web complet peut nécessiter plusieurs semaines. Lors de notre premier rendez-vous, nous vous fournirons un planning précis pour votre projet.</p>
        </div>
    </div>
    <div className={styles.tab}>
        
        <input type="radio" name="accordion-2" id="rd4"/>
        <label for="rd4" className={styles.tab__label}>Quel est le coût moyen de vos services ?</label>
        <div className={styles.tab__content}>
            <p>Le coût varie en fonction de la complexité et de l'étendue du projet. Après avoir discuté de vos besoins, nous vous fournirons un devis détaillé. Nous veillons toujours à offrir un excellent rapport qualité-prix.</p>
        </div>
    </div>
    <div className={styles.tab}>
        
        <input type="radio" name="accordion-2" id="rd5"/>
        <label for="rd5" className={styles.tab__label}>Comment puis-je commencer à travailler avec vous ?</label>
        <div className={styles.tab__content}>
            <p>C'est simple ! Vous pouvez nous contacter via notre formulaire de contact, par téléphone, ou par email. Nous organiserons une première réunion pour discuter de votre projet, de vos objectifs, et définir ensemble la meilleure approche.</p>
        </div>
    </div>
    <div className={styles.tab}>
        
        <input type="radio" name="accordion-2" id="rd6"/>
        <label for="rd6" className={styles.tab__label}>Quel est le coût moyen de vos services ?</label>
        <div className={styles.tab__content}>
            <p>Le coût varie en fonction de la complexité et de l'étendue du projet. Après avoir discuté de vos besoins, nous vous fournirons un devis détaillé. Nous veillons toujours à offrir un excellent rapport qualité-prix.</p>
        </div>
    </div>
    
</section>
       
    </div>
  );
}
