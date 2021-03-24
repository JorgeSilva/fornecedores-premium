import styles from '../styles/components/SuporteAulas.module.css';

export function SuporteAulas() {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <h2>VOCÊ NÃO ESTÁ SOZINHO!</h2>
                <p>
                    Eu vou te ensinar a realizar a sua primeira
                    compra, produzir um anúncio de vendas e escalar
                    os seus resultados!
                </p>
                <h3>
                    Eu vou te ensinar a ganhar dinheiro com o seu negócio.
                </h3>
            </div>
            <div className={styles.aulasSuporte}>
                <div className={styles.aulas}>
                    <img src="icons/responsive.png" alt="Aulas" />
                    <h2>Aulas Práticas</h2>
                    <p>Aulas de  passo a passo que vão te guiar até o sucesso</p>
                </div>
                <div className={styles.aulas}>
                    <img src="icons/telegram.png" alt="Aulas" />
                    <h2>Suporte Diferenciado</h2>
                    <p>Temos um Grupo no Telegram para te ajudar no que for preciso.</p>
                </div>
                
            </div>

        </div>
    );
}