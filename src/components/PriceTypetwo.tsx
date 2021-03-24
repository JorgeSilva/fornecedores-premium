import { ButtonOneText } from './ButtonOneText';
import styles from '../styles/components/PriceTypetwo.module.css';

export function PriceTypetwo() {
    return (
        <div className={styles.container}>
            <footer>
                <img src="images/por-apenas.png" alt="Preço" />
                <ButtonOneText text="QUERO A LISTA AGORA!" />
                <img src="icons/compra-segura.png" alt="Compra Certa" />
            </footer>
        </div>
    );
}