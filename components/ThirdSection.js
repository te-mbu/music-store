import styles from '../styles/ThirdSection.module.css';

function ThirdSection() {

    const names = ["ABOUT", "CONTACT", "SUPPORT", "STORES"]
    const buttons = names.map(name => {
        return <button>{name}</button>
    })

    return (
        <div>
            <div className={styles.footer}>
                {buttons}
            </div>
        </div>
    );
  }
  
  export default ThirdSection;