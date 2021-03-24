import styles from '../styles/components/Sorteio.module.css';

export function Sorteio() {
    return (
        <div className={styles.container}>
            <h2>
                <span>ATENÇÃO!</span> ISSO NÃO É UMA "PEGADINHA"
            </h2>
            <div className={styles.sorteioContainer}>
                <div className={styles.photo}>
                    <img src="images/iphone-12.png" alt="Iphone12" />
                </div>
                <div className={styles.description}>
                    <h3>
                        Ao adquirir a Lista hoje, você participa do<span> SORTEIO DE UM IPHONE 12.</span> O sorteio será realizado quando alcançarmos <span>7.000 ALUNOS</span>
                    </h3>
                    <h4>
                        <span>QUANTIDADE DE ALUNOS:</span>
                    </h4>
                    <h5>6.986</h5>
                    <p>*atualizado hoje, faltam 14</p>
                </div>
            </div>
        </div>
    );
}