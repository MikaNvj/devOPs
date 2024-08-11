import styles from '../../styles/about.module.css';
import lg from '../../assets/lg.png';
import Image from 'next/image'

export default function About() {
    return (
        <div className={styles.about_section}>
            <h1 className={styles.title_about}>A propos de nous</h1>
            <div className={styles.about}>
                <div className={styles.img}>
                    <Image className={styles.logoimg}
                        src={lg}
                        width={'50%'}
                        height={'50%'}
                        alt="Picture of the author"
                    />
                </div>
                <div className={styles.paragraphe}>
                    <p>NOOVA fusionne l'art et la technologie pour vous créer des visuels percutants, des sites élégants et des animations captivantes. Chaque projet est un nouvelle opportunité de raconter votre histoire de manière unique.
                    Avec une équipe passionnée de designers, de développeurs et de créatifs, nous mettons notre expertise au service de vos ambitions. Nous donnons vie à vos idées de la création graphique au motion design, en passant par le développement de sites web sur mesure</p>
                    <div className={styles.logo}>
                    <Image className={styles.logos}
                        src={lg}
                        width={'5%'}
                        height={'5%'}
                        alt="Picture of the author"
                    /><Image className={styles.logos}
                    src={lg}
                    width={'50%'}
                    height={'50%'}
                    alt="Picture of the author"
                /><Image className={styles.logos}
                src={lg}
                width={'50%'}
                height={'50%'}
                alt="Picture of the author"
            /><Image className={styles.logos}
            src={lg}
            width={'50%'}
            height={'50%'}
            alt="Picture of the author"
        /><Image className={styles.logos}
        src={lg}
        width={'50%'}
        height={'50%'}
        alt="Picture of the author"
    /><Image className={styles.logos}
    src={lg}
    width={'50%'}
    height={'50%'}
    alt="Picture of the author"
/><Image className={styles.logos}
        src={lg}
        width={'50%'}
        height={'50%'}
        alt="Picture of the author"
    />
                    </div>
                </div>
            </div>
        </div>
    );
}
