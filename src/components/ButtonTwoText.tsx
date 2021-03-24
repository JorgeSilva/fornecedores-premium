import styles from '../styles/components/ButtonTwoText.module.css';

interface TitleProps {
    text: string;
};
export function ButtonTwoText(props: TitleProps) {
    return (
        <div className={styles.container}>
            <a href="https://app.monetizze.com.br/checkout/KSJ171023" target="_blank" >
                {props.text}
            </a>
        </div>
    );
}