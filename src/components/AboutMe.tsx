import styles from '../styles/components/AboutMe.module.css';

export function AboutMe() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.photos}>
                <div className={styles.photo1}>
                    <img src="images/fudido-antes.png" alt="Antes" />
                </div>
                <div className={styles.photo2}>
                    <img src="images/wellington-teles.png" alt="Depois" />
                </div>
                <div className={styles.photo3}>
                    <img src="images/barraca.png" alt="Barraca" />
                </div>
            </div>
            <div className={styles.aboutMe}>
                <h2>
                    QUEM É WELLINGTON TELES:
                </h2>
                <p>
                    Vendia DVD. Foi feirante. Foi humilhado por suas condições financeiras. Aos 16 anos fundou o seu primeiro negócio. Criou o Método Minha Primeira Empresa. Hoje é empresário, dono de duas empresas. Transformou a vida de mais de 4 mil jovens empreendedores, ensinando-os a alcançarem a liberdade financeira por meio do seu método de sucesso.
                </p>
            </div>
        </div>
    );
}