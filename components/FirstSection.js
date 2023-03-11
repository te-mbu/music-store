import styles from '../styles/FirstSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser , faBars, faLocationDot, faCartShopping} from '@fortawesome/free-solid-svg-icons'


function FirstSection() {
  return (
    <div className={styles.FirstSection}>

      <div className={styles.header}>
        <FontAwesomeIcon className={styles.leftHeader} icon={faBars} size="lg" inverse/>
        <h1 className={styles.title}>MUSIC STORE</h1>
        <div className={styles.rightHeader}>
          <FontAwesomeIcon icon={faUser} size="lg" inverse/>
          <FontAwesomeIcon icon={faLocationDot} size="lg" inverse/>
          <FontAwesomeIcon icon={faCartShopping} size="lg" inverse />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.fpfooter}>
          <div className={styles.fpfooterLeft}>
            <h3>PHANTOM</h3>
            <h1>IMPLOSIVE SOUND</h1>
          </div>
          <div className={styles.fpfooterRight}>
            <button className={styles.discover}>DISCOVER</button>
            <button className={styles.buy}>BUY</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FirstSection;
