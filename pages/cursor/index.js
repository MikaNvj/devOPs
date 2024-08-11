import { useState, useEffect } from 'react';
import styles from '../../styles/cursor.module.css'

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove   
 = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove',   
 handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.cursor_follower} style={{ left:   
 position.x, top: position.y }}>
      {/* Vous pouvez personnaliser le contenu de ce div */}
      <div className={styles.cursor_dot} ></div>
    </div>
  );
};

export default CursorFollower;