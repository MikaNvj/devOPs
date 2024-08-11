'use client';

import styles from '../../styles/worktwo.module.css'


import Card from '../card';
import lg1 from '../../assets/s.png';
import lg2 from '../../assets/ez.png';
import lg3 from '../../assets/1.png';
import lg4 from '../../assets/final.png';
import lg5 from '../../assets/botoman.png';
import lg6 from '../../assets/post.png';
import lg7 from '../../assets/post2.png';



export default function Worktwo() {

  return (

    <main className={styles.main}>

      {

        cards.map( (carde, i) => {

          return <Card key={i} mg={carde.url}/>

        })

      }

    </main>

  )

}
const cards = [
  {
    url: lg1,

  },
  {
    url: lg2,
  },
  {
    url: lg3,

  },
  {
    url: lg4,

  },
  {
    url: lg5,

  },
  {
    url: lg6,

  },
  {
    url: lg7,

  },
];