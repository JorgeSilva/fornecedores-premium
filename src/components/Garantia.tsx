import styles from '../styles/components/Garantia.module.css';
import { ButtonOneText } from './ButtonOneText';

export function Garantia() {
    return (
        <div className={styles.container}>
            <div className={styles.garantia}>
                <img src="images/7-garantia.png" alt="Garantia" />
            </div>
            <div className={styles.termos}>
                <h2>
                    PODE FICAR BEM TRANQUILO,
                    O RISCO É TODO NOSSO!
                </h2>
                <p>
                    VOCÊ PODE CANCELAR POR QUALQUER MOTIVO EM ATÉ 7 DIAS DEPOIS DO PAGAMENTO QUE FAREMOS O REEMBOLSO NA HORA. ACABARAM SUAS DESCULPAS PARA NÃO FAZER PARTE…
                </p>
                <ButtonOneText text="QUERO COMPRAR A LISTA POR MENOS DE 0,30 POR DIA" />
            </div>
        </div>
    );
}