import styles from '../styles/components/ExclusiveBonus.module.css';

export function ExclusiveBonus() {
    return (
        <div className={styles.container}>
            <h2>
                <strong>8 BÔNUS EXCLUSIVOS</strong><br/>
                COMPRANDO AGORA, VOCÊ LEVA DE GRAÇA:
            </h2>
            <div className={styles.bonusContainer}>
                <div className={styles.bonus}>
                    <img src="images/instagram-milionario.png" alt="Instagram Milionário" />
                    <p>
                       <span>SUPER BÔNUS 1:</span> curso para o Instagram Milionário: aprenda como utilizar o Instagram para vender seus produtos
                    </p>
                </div>
                <div className={styles.bonus}>
                    <img src="images/trafego-pago.png" alt="Trafego Pago" />
                    <p>
                       <span>SUPER BÔNUS 2:</span> curso de Trafego Pago: aprenda como usar as ferramentas de vendas mais utilizadas na internet
                    </p>
                </div>
            </div>
        </div>
    );
}