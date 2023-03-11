import styles from '../styles/Product.module.css';

function Product(prop) {
    return (
            <div className={styles.product}>
                <img src={`./phantom${prop.nb}.png`} alt={`Phantom ${prop.nb}`} />
                <div className={styles.productInfos}>
                    <h4>{prop.title}</h4>
                    <h1>{prop.description}</h1>
                    <button className={styles.discover}>DISCOVER</button>
                </div>
            </div>
    );
  }
  
  export default Product;