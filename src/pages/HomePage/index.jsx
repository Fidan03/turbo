import styles from './homePage.module.css'
import Filter from '../../components/Filter/index'
import Card from '../../components/Card/index'
import { useState } from 'react'
import data from '../../data/mockData'
import { useNavigate } from 'react-router';






const CardList = () => {

  const [cards, setCards] = useState([...data]);

  const navigate = useNavigate();

  function handleClick (id) {

    navigate(`/card/${id}`)
    
  }

  

  
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <Filter/>
      </div> 
      <div className={styles.ads}>
        <h1>Elanlar</h1>
      </div>

      <div className={styles.cards} onChange={(e) => setSelect(e.target.value)}>
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
          add={card}
          />
        ))} 

      </div>

    </div>
  )
}

export default CardList