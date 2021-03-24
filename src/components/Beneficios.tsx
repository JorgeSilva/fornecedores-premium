import React from 'react';
import styles from '../styles/components/Beneficios.module.css';

export function Beneficios() {
    return (
        <div className={styles.container}>
            <h2>
                PORQUE A LISTA FARÁ VOCÊ DISPARAR NA FRENTE DOS SEUS CONCORRENTES
            </h2>
            <div className={styles.beneficiosContainer}>
                <div className={styles.photo}>
                    <img src="images/mockup.png" alt="Mockup" />
                </div>
                <div className={styles.itens}>
                    <div className={styles.item}>
                        <img src="icons/saco-de-dinheiro.png" alt="Dinheiro" />
                        <span>
                            O MELHOR CUSTO BENEFÍCIO, COM LUCRO DE ATÉ 400%
                        </span>
                    </div>
                    <div className={styles.item}>
                        <img src="icons/segurado.png" alt="Segurado" />
                        <span>
                            MAIS DE 600 FORNECEDORES AUTENTICADOS
                        </span>
                    </div>
                    <div className={styles.item}>
                        <img src="icons/seguranca.png" alt="Segurança" />
                        <span>
                            GARANTIDO A SEGURANÇA E ECONOMIA COM FORNECEDORES CERTIFICADOS
                        </span>
                    </div>
                    <div className={styles.item}>
                        <img src="icons/badge.png" alt="Exclusivo" />
                        <span>
                            ACESSO A PRODUTOS ORIGINAIS E EXCLUSIVOS
                        </span>
                    </div>
                    <div className={styles.item}>
                        <img src="icons/relaxing.png" alt="Comforto" />
                        <span>
                            RECEBA OS PRODUTOS NO CONFORTO DA SUA CASA
                        </span>
                    </div>
                    <div className={styles.item}>
                        <img src="icons/smartphone.png" alt="Celular" />
                        <span>
                            COMPRA DESCOMPLICADA: ADQUIRA TUDO ONLINE, PELO SEU CELULAR
                        </span>
                    </div>
                    <div className={styles.item}>
                        <img src="icons/banco.png" alt="Compras" />
                        <span>
                            RECEBA O PASSO A PASSO SOBRE NEGÓCIOS, COMPRAS E REVENDAS
                        </span>
                    </div>
                    <div className={styles.item}>
                        <img src="icons/homem-de-negocios.png" alt="Independência" />
                        <span>
                            UM SALTO PARA A SUA INDEPENDÊNCIA FINANCEIRAUM SALTO PARA A SUA INDEPENDÊNCIA FINANCEIRA
                        </span>
                    </div>
                    <div className={styles.item}>
                        <img src="icons/free.png" alt="Gratis" />
                        <span>
                            BÔNUS EXCLUSIVO SÓ HOJE: O CURSO DE INSTAGRAM MILIONÁRIO E TRÁFEGO PAGO (IMPULSIONA AS SUAS VENDAS)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}