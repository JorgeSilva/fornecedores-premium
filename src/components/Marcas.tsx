import styles from '../styles/components/Marcas.module.css';

export function Marcas() {
    return (
        <div className={styles.container}>
            <h2>Conheça as Principais Marcas
            que você Terá Acesso</h2>
            <img src="images/marcas-diversas.png" alt="Marcas" />
        </div>
    );
}