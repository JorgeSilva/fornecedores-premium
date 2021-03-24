import styles from '../styles/components/Instagram.module.css';

export function Instagram() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>NÃO ACREDITA?</h2>
                <h3>AQUI ESTÁ O MEU INSTAGRAM PARA VOCÊ ACOMPANHAR OS MEUS RESULTADOS!</h3>
                <img src="icons/instagram.png" alt="Instagram" />
                <a href="https://instagram.com/wellingtonteles01" target="_blank" rel="Intagram">CLICK AQUI</a>
            </div>
        </div>
    );
}