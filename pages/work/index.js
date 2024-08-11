'use client';
import styles from '../../styles/work.module.css';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import lg1 from '../../assets/s.png';
import lg2 from '../../assets/ez.png';
import lg3 from '../../assets/1.png';
import lg4 from '../../assets/final.png';
import lg5 from '../../assets/botoman.png';
import lg6 from '../../assets/post.png';
import lg7 from '../../assets/post2.png';
import lg8 from '../../assets/post3.png';
import Image from 'next/image'

const Work = () => {
  return (
    <div className={styles.work_section}>
      <h1 className={styles.title_work}>Recent projet</h1>
      <HorizontalScrollCarousel />
      <HorizontalScrollCarousels />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-60%", "1%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className={styles.contentmotion}>
        <motion.div style={{ x }} className={styles.card_wrap}>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
const HorizontalScrollCarousels = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0.5, 1], ["1", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className={styles.contentmotion}>
        <motion.div style={{ x }} className={styles.card_wrap}>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className={styles.cardwork}
    >
       <Image className={styles.img}
                        src={card.url}
                        width={'50%'}
                        height={'50%'}
                        alt="Picture of the author"
                    />
    </div>
  );
};

export default Work;

const cards = [
  {
    url: lg1,
    title: "Title 1",
    id: 1,
  },
  {
    url: lg2,
    title: "Title 2",
    id: 2,
  },
  {
    url: lg3,
    title: "Title 3",
    id: 3,
  },
  {
    url: lg4,
    title: "Title 4",
    id: 4,
  },
  {
    url: lg5,
    title: "Title 5",
    id: 5,
  },
  {
    url: lg6,
    title: "Title 6",
    id: 6,
  },
  {
    url: lg7,
    title: "Title 7",
    id: 7,
  },
];
