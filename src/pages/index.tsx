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
          <p>Importante: A liberação do acesso aos fornecedores é realizada após a compensação do pagamento. Você receberá um e-mail com o link de acesso ao curso. Atenção: Fornecemos um caminho a ser seguido, você é responsável pelos seus rendimentos, ações e resultados, e ao adquirir o produto você concorda em não nos responsabilizar por qualquer resultado, decisão, ação, imprevisto ou prejuízo em qualquer circunstância. As imagens apresentadas são meramente ilustrativas e os preços não são tabelados, podendo sofrer alterações.</p>
          <p>Produtor: Wellington Teles</p>
          <p>POLíTICA E PRIVACIDADE/TERMOS DE USO</p>
      </footer>

    </div>
  );
}
