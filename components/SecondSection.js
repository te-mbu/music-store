import styles from '../styles/SecondSection.module.css';
import Product from './Product'


function SecondSection() {
  const product = [
    {nb: 1, title: 'PHANTOM I White', description: 'A class of its own.' },
    {nb: 2, title: 'PHANTOM II Gold', description: 'Pure sound.' },
    {nb: 3, title: 'PHANTOM II Black', description: 'Deeply nomadic.' },
    {nb: 4, title: 'PHANTOM II White', description: 'Intensively immersive.' },
]
  const products = product.map(data => {
    return <Product nb={data.nb} title={data.title} description={data.description}/>
  })
    return (
      <div className={styles.main}>
        <div className={styles.soundbar}>
            <div className={styles.soundbarTitle}>
              <h4>LATEST LAUNCH</h4>
              <h1>DIONE SOUNDBAR</h1>
            </div>
            <img src="./soundbar.png" alt="soundbar" />
            <button className={styles.discover}>DISCOVER</button>
        </div>
        <div className={styles.products}>
          {products}      
        </div>
      </div>
    );
  }
  
  export default SecondSection;
  