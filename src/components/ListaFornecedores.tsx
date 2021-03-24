import styles from '../styles/components/ListaFornecedores.module.css';

export function ListaFornecedores() {
    return (
        <div className={styles.container}>
            <h2>
                LISTA COMPLETA!
                SÃO MAIS DE 600 FORNECEDORES
            </h2>
            <div className={styles.listas}>

                <div className={styles.lista}>
                    <div className={styles.item}>
                        <img src="images/foto1.png" alt="ROUPAS DE GRIFES"/>

                        <div className={styles.texts}>
                            <h2>
                                +100 Fornecedores de
                            </h2>
                            <h3>ROUPAS DE GRIFES</h3>
                            <p>Produtos Peruanos e Linha Premium De Marcas Importadas e Nacionais.</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="images/foto2.png" alt="MODA FEMININA"/>

                        <div className={styles.texts}>
                            <h2>
                                +150 fornecedores de 
                            </h2>
                            <h3>MODA FEMININA</h3>
                            <p>Roupas e Acessórios de Marcas Excelentes</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="images/foto3.png" alt="MODA INFANTIL"/>
                        <div className={styles.texts}>
                            <h2>
                                +20 Fornecedores de  
                            </h2>
                            <h3>MODA INFANTIL</h3>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="images/foto4.png" alt="BIJUTERIAS E SEMI JÓIAS"/>
                        <div className={styles.texts}>
                            <h2>
                                +40 Fornecedores de   
                            </h2>
                            <h3>BIJUTERIAS E SEMI JÓIAS </h3>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="images/foto5.png" alt="CAMISAS DE TIME"/>
                        <div className={styles.texts}>
                            <h2>
                                +8 Fornecedores de    
                            </h2>
                            <h3>CAMISAS DE TIME </h3>
                            <p>Camisas de times Nacionais e Internacionais. </p>
                        </div>
                    </div>
                </div>
                
                <div className={styles.lista}>
                    <div className={styles.item}>
                        <img src="images/foto6.png" alt="RELÓGIOS IMPORTADOS"/>
                        <div className={styles.texts}>
                            <h2>
                                +20 Fornecedores de
                            </h2>
                            <h3>RELÓGIOS IMPORTADOS</h3>
                            <p>Relógios Masculinos e Femininos de Marcas Renomadas</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="images/foto7.png" alt="PERFUMES, COSMÉTICOS E MAQUIAGEM"/>
                        <div className={styles.texts}>
                            <h2>
                                +45 Fornecedores de 
                            </h2>
                            <h3>PERFUMES, COSMÉTICOS E MAQUIAGEM</h3>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="images/foto8.png" alt="ELETRÔNICOS"/>
                        <div className={styles.texts}>
                            <h2>
                                +20 Fornecedores de 
                            </h2>
                            <h3>ELETRÔNICOS</h3>
                            <p>Produtos Originais e de Alta Qualidade.</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="images/foto9.png" alt="DIRETO DO PERU"/>
                        <div className={styles.texts}>
                            <h2>
                                +6 Fornecedores   
                            </h2>
                            <h3>DIRETO DO PERU</h3>
                            <p>Peças de algodão Pima, diretamente do Peru</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="images/foto10.png" alt="DROPSHIPPING"/>
                        <div className={styles.texts}>
                            <h2>
                                +50 Fornecedores de     
                            </h2>
                            <h3>DROPSHIPPING</h3>
                            <p>Revenda para todo o Brasil sem precisar de estoque.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}