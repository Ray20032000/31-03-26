import styles from "../styles/Carrossel.module.css";
import CardFilme from "../components/CardFilme.jsx";

function Carrossel() {
    return (
        <div className={styles.carrossel}>
            <CardFilme className={styles.item} id={1}/>
            <CardFilme className={styles.item} id={2}/>
            <CardFilme className={styles.item} id={3}/>
            <CardFilme className={styles.item} id={4}/>
            <CardFilme className={styles.item} id={5}/>
            <CardFilme className={styles.item} id={6}/>
            <CardFilme className={styles.item} id={7}/>
            <CardFilme className={styles.item} id={8}/>
            <CardFilme className={styles.item} id={9}/>
            <CardFilme className={styles.item} id={10}/>
        </div>
    );
}

export default Carrossel;