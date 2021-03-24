import styles from '../styles/components/Fornecedores.module.css';

export function Fornecedores() {
    return (
        <div className={styles.container}>
                <img src="images/ebook-fornecedores.png" alt="Book"/>
                <h2>
                    <span>+</span>600 FORNECEDORES
                </h2>
                <h3>
                    DE DIVERSOS SEGUIMENTOS
                </h3>
                <img src="icons/icones.png" alt="Happy" />
        </div>
    );
}