import { ButtonOneText } from './ButtonOneText';
import styles from '../styles/components/Price.module.css';

export function Price() {
    return (
        <div className={styles.container}>
            <footer>
                <img src="images/por-apenas.png" alt="Preço" />
                <ButtonOneText text="QUERO A LISTA AGORA!" />
                <p>(hoje, menos de 0,30 por dia)</p>
            </footer>
        </div>
    );
}