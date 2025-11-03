import { useEffect, useState } from 'react';
import styles from './Contact.module.scss'

interface ani{
  target: number;
  duration: number;
}

function AnimatedNumber({ target, duration }:ani) {
const [value, setValue] = useState(0);

useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const animate = (time:number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1); // 0 ~ 1
      const easeOut = 1 - Math.pow(1 - progress, 1); // 부드러운 감속 easing
      const current = Math.floor(start + (target - start) * easeOut);
      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{value.toLocaleString()}</span>;
}
const Contact = () => {
  return (
  <div className={styles.contact}>
    <div style={{ textAlign: "center", fontSize: "2rem", marginTop: "50px" }} className={styles.ul}>
      <div className={styles.fl}>
        <div>
          <p>인증건수</p><AnimatedNumber target={150} duration={1.5} />
        </div>
      </div>
      <div className={styles.fl}>
        <div>
        <p>평가·시상</p><AnimatedNumber target={255} duration={1.5} />
        </div>
        
      </div>
      <div className={styles.fl}>
        <div>
        <p>교육수료</p><AnimatedNumber target={75} duration={1.5} />
        </div>
      </div>
    </div>
  </div>
  )
};

export default Contact;


