import Carousel from "react-elastic-carousel";
import styles from '../styles/components/PrintTestimonySlide.module.css';

export function PrintTestimonySlide() {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
  ]

  return (
    <div className={styles.container}>
      <Carousel isRTL={false} breakPoints={breakPoints}>
        <img src="images/prints.png"/>
        <img src="images/prints2.png"/>
        <img src="images/prints3.png"/>
        <img src="images/prints4.png"/>
        <img src="images/prints5.png"/>
        <img src="images/prints6.png"/>
      </Carousel>
    </div>
  )
} 