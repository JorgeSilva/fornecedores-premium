import styles from '../styles/components/Depoimentos.module.css';
import { ButtonOneText } from './ButtonOneText';

export function Depoimentos() {
    return (
        <div className={styles.container}>
            <ButtonOneText text="QUERO GARANTIR OS BÔNUS" />
            <div className={styles.title}>
                <h2>PRODUTO APROVADO!</h2>
                <p>
                    MAIS DE 6 MIL CLIENTES SATISFEITOS E FAZENDO MUITO DINHEIRO!
                </p>
                <h3>VEJA O QUE ELES DIZEM:</h3>
            </div>
            <div className={styles.containerVideos}>
                <div className={styles.video}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZrqXop8_6xs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                    </iframe>
                </div>
                <div className={styles.video}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/wM2jRc_wZQw"   frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;     gyroscope; picture-in-picture"></iframe>
                </div>
                <div className={styles.video}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oKn-dYGyXCk"   frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;     gyroscope; picture-in-picture"></iframe>
                </div>
                <div className={styles.video}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lms_TxH1J2Q"   frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;     gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
        </div>
    );
}