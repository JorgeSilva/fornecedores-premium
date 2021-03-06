import Head from 'next/head'
import React from 'react'
import { AboutMe } from '../components/AboutMe'
import { Beneficios } from '../components/Beneficios'
import { ButtonTwoText } from '../components/ButtonTwoText'
import { CountDown } from '../components/CountDown'
import { Depoimentos } from '../components/Depoimentos'
import { DuvidasFrequentes } from '../components/DuvidasFrequentes'
import { ExclusiveBonus } from '../components/ExclusiveBonus'
import { ExclusiveBonusSlide } from '../components/ExclusiveBonusSlide'
import { Fornecedores } from '../components/Fornecedores'
import { Garantia } from '../components/Garantia'
import { Instagram } from '../components/Instagram'
import { LibraryPhotos } from '../components/LibraryPhotos'
import { ListaFornecedores } from '../components/ListaFornecedores'
import { ListaPorDentro } from '../components/ListaPorDentro'
import { Marcas } from '../components/Marcas'
import { Price } from '../components/Price'
import { PriceTypetwo } from '../components/PriceTypetwo'
import { PrincipalSection } from '../components/PrincipalSection'
import { PrintTestimonySlide } from '../components/PrintTestimonySlide'

import { Sorteio } from '../components/Sorteio'
import { SuporteAulas } from '../components/SuporteAulas'
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <section className={styles.principalContainer}>
          <PrincipalSection />
        </section>
        <section className={styles.photosContainer}>
          <LibraryPhotos />
          <ButtonTwoText text="SIM! QUERO GARANTIR O MEU ACESSO AOS FORNECEDORES AGORA COM DESCONTO"/>
       </section>
       <section className={styles.countContainer}>
         <CountDown />
       </section>
       <section className={styles.aboutContainer}>
         <AboutMe />
       </section>
       <section className={styles.fornecedoresContainer}>
         <Fornecedores />
       </section>
       <section className={styles.beneficiosContainer}>
         <Beneficios />
       </section>
       <section className={styles.priceContainer}>
          <Price />
       </section>
       <section className={styles.sorteioContainer}>
          <Sorteio />
       </section>
       <section className={styles.exclusiveContainer}>
         <ExclusiveBonus />
       </section>
       <section className={styles.exclusiveSlideContainer}>
          <ExclusiveBonusSlide />
       </section>
       <section className={styles.depoimentes}>
          <Depoimentos />
       </section>
       <section className={styles.TestimonySlideContainer}>
          <PrintTestimonySlide />
       </section>
       <section>
         <PriceTypetwo />
       </section>
       <section className={styles.listaContainer}>
          <ListaFornecedores />
       </section>
       <section className={styles.listaPorDentroContainer}>
          <ListaPorDentro />
       </section>
       <section className={styles.suporteContainer}>
          <SuporteAulas />
       </section>
       <section className={styles.garantiaContainer}>
          <Garantia />
       </section>
       <section className={styles.instagramContainer}>
          <Instagram />
       </section>
       <section className={styles.marcasContainer}>
          <Marcas />
       </section>
       <section className={styles.duviadasContainer}>
          <DuvidasFrequentes />
       </section>
      </main>
      <footer className={styles.footerContainer}>
          <p>Importante: A libera????o do acesso aos fornecedores ?? realizada ap??s a compensa????o do pagamento. Voc?? receber?? um e-mail com o link de acesso ao curso. Aten????o: Fornecemos um caminho a ser seguido, voc?? ?? respons??vel pelos seus rendimentos, a????es e resultados, e ao adquirir o produto voc?? concorda em n??o nos responsabilizar por qualquer resultado, decis??o, a????o, imprevisto ou preju??zo em qualquer circunst??ncia. As imagens apresentadas s??o meramente ilustrativas e os pre??os n??o s??o tabelados, podendo sofrer altera????es.</p>
          <p>Produtor: Wellington Teles</p>
          <p>POL??TICA E PRIVACIDADE/TERMOS DE USO</p>
      </footer>

    </div>
  );
}
