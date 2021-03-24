import React from 'react';
import styles from '../styles/components/PrincipalSection.module.css'
import { ButtonStart } from './ButtonStart';
import { VideoYouTube } from './VideoYouTube';

export function PrincipalSection() {
    return (
        <div className={styles.container}>
            <h1>
                <span>ATENÇÃO:</span> VEJA AGORA O QUE EU UTILIZO PARA TER <span>FORNECEDORES BRASILEIROS</span> CONFIÁVEIS E DESCUBRA COMO FAZER O MESMO
            </h1>
            <p>
            <span>(AVISO:</span> 98,7% das pessoas que assistem este vídeo NÃO conseguem chegar até o fim, porque falta <span>FOCO e CONCENTRAÇÃO)</span>
            </p>
            <div className={styles.video}>
                <VideoYouTube />
            </div>
            <h2>
                Hoje de <span>R$297</span> por apenas <span>R$97 e ainda com 70% de Desconto</span> com Acesso Vitalício   
            </h2>
            <ButtonStart text="SIM" text2="QUERO COMPRAR A LISTA DE FORNECEDORES PRÊMIUM 3.0"/>
            <img src="./icons/compra-segura.png" alt="Compra Segura"/>
        </div>
    );
}