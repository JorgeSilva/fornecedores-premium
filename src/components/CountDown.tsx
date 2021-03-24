import { useEffect, useState } from "react";
import styles from '../styles/components/CountDown.module.css';

export function CountDown() {

    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval: NodeJS.Timeout;

    const date = new Date()
    const now = new Date().getTime();

    function initDate() {
        if( date.getHours() > 3)
            date.setDate(date.getDate() + 1)
        date.setHours(4)
        date.setMinutes(0)
        date.setSeconds(0)   
    }

   initDate()
    
    const startTimer = () => {
        
        interval = setTimeout(() => {
            
            
            const distance = date.getTime() - now;

            const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))).padStart(2, '0');
            const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0')

            if (distance < 0) {
                initDate()
            } else {
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);

    };

    useEffect(() => {
        startTimer();
    });

    return (
        <div className={styles.container}>
            <h2>
                Últimas horas com 50% de DESCONTO
            </h2>
            <div className={styles.countContainer}>
                <section className={styles.count}>
                    <p>{timerHours}</p>
                    <span>HORAS</span>
                </section>
                <section className={styles.count}>
                    <p>{timerMinutes}</p>
                    <span>MIN</span>
                </section>
                <section className={styles.count}>
                    <p>{timerSeconds}</p>
                    <span>SEG</span>
                </section>
            </div>
        </div>
    );
}