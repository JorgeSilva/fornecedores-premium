import styles from '../styles/components/DuvidasFrequentes.module.css';

export function DuvidasFrequentes() {
    return (
        <div className={styles.container}>
            <h2><span>DÚVIDAS</span> FREQUENTES</h2>
            <div className={styles.listas}>
                <div className={styles.lista}>
                    <h2>QUAIS AS FORMAS DE PAGAMENTO?</h2>
                    <p>Boleto Bancário ou Cartão de Crédito</p>
                </div>
                <div className={styles.lista}>
                    <h2>QUERO PARCELAR NO BOLETO, EU POSSO?</h2>
                    <p>Não, o parcelamento é possível somente no cartão de crédito.</p>
                </div>
                <div className={styles.lista}>
                    <h2>QUANTO TEMPO DEMORA ENTRE O PAGAMENTO E A LIBERAÇÃO DO ACESSO?</h2>
                    <p>Cartão: 3 minutos.
                    Boleto: De 1 a 3 dias após o pagamento.</p>
                </div>
                <div className={styles.lista}>
                    <h2>OS FORNECEDORES SÃO CONFIÁVEIS?</h2>
                    <p>Sim, todos os fornecedores são certificados e trabalham com competência</p>
                </div>
                <div className={styles.lista}>
                    <h2>POR QUE É TÃO BARATO ASSIM?</h2>
                    <p>Porque pensei na dificuldade de investimento e em como o seu dinheiro é valioso. Por isso, o valor da Lista + Bônus exclusivos é de apenas R$ 147,00, que você poderá adquirir e aproveitar melhor os produtos fornecidos para vender!</p>
                </div>
                <div className={styles.lista}>
                    <h2>COMO RECEBEREI A LISTA?</h2>
                    <p>Assim que confirmar o pagamento, você receberá o acesso à lista por E-mail.
                    OBS: Se o E-mail não chegar na sua Caixa de Entrada, verifique no Lixo Eletrônico ou Caixa de SPAM</p>
                </div>
            </div>
        </div>
    );
}