import styles from './homePage.module.css'
import Filter from '../../components/Filter/index'
import Card from '../../components/Card/index'
import { useState } from 'react'
import data from '../../data/mockData'




const CardList = () => {

  const [cards] = useState([...data]);


  
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <Filter/>
      </div> 
      <div className={styles.ads}>
        <h1>Elanlar</h1>
      </div>

      <div className={styles.cards}>
        {cards.map((card) => (
          <Card 
          key={card.id}
          img={card.image}
          price={card.price}
          brand={card.brand}
          model={card.model}
          year={card.year}
          engine={card.engine}
          mileage={card.mileage}
          />
        ))} 

      </div>

    </div>
  )
}

export default CardList