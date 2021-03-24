import styles from '../styles/components/ListaPorDentro.module.css';
import { FaWhatsapp } from "react-icons/fa";

export function ListaPorDentro() {
    return (
        <div className={styles.container}>
            <div className={styles.video}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/qiaaTm3EwQ4"   frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;     gyroscope; picture-in-picture"></iframe>
            </div>
            <div className={styles.contato}>
                <h2>DÊ UMA ESPIADA DENTRO DA LISTA!</h2>
                <a href="https://wa.me/message/EK3SBRY4PGA7M1" target="_blank">
                    <FaWhatsapp />
                    <span>FALAR COM O SUPORTE</span>
                </a>
            </div>
        </div>
    );
}