import Carousel from "react-elastic-carousel";

import styles from '../styles/components/ExclusiveBonusSlide.module.css';

export function ExclusiveBonusSlide() {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 }
  ]

  return (
    <div className={styles.container}>
      <Carousel isRTL={false} breakPoints={breakPoints}>
        <img src="images/BÔNUS-1-1024x1024-1.png"/>
        <img src="images/BÔNUS-2-1024x1024-1.png"/>
        <img src="images/BÔNUS-3-1024x1024-1.png"/>
        <img src="images/BÔNUS-4-1024x1024-1.png"/>
        <img src="images/BÔNUS-5-1024x1024-1.png"/>
        <img src="images/BÔNUS-6-1024x1024-1.png"/>
      </Carousel>
    </div>
  )
} 