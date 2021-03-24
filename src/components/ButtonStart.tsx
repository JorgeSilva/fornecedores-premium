import styles from '../styles/components/ButtonStart.module.css';

interface TitleProps {
    text: string;
    text2: string;
};
export function ButtonStart(props: TitleProps) {
    return (
        <div className={styles.container}>
            <a href="https://app.monetizze.com.br/checkout/KSJ171023" >
                <strong>{props.text}</strong>
                <span>{props.text2}</span>
            </a>
        </div>
    );
}