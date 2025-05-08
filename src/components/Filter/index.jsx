import React, { useState } from 'react'
import styles from './filter.module.css'
import data from '../../data/mockData'


const Filter = () => {

  const [options, setOptions] = useState([...data]);
  const [select, setSelect] = useState(data.brand);



  
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.firstRaw}>
          <select name="model" className={styles.model}>
            <option value="select">Seçin</option>

            {options.map(option => (
              <option value={option.id} onChange={(e) => setSelect(e.target.value)}>{option.brand}</option>
            ))}

          </select>

          <select name="marka" className={styles.marka}>
          <option value="select">Seçin</option>

            {options.map(option => (
              <option value={option.id}>{option.model}</option>
            ))}
          </select>

          <div className={styles.options}>
            <button className={styles.all}>Hamısı</button>
            <button className={styles.new}>Yeni</button>
            <button className={styles.isUsed}>Sürülmüş</button>
          </div>

          <select name="city" className={styles.city}>
            <option value="city">Şəhər</option>
          </select>
        </div>



        <div className={styles.secondRaw}>
          
          <div className={styles.priceInputs}>
            <input type="number" placeholder='Qiymət,min' className={styles.minPrice}/>
            <input type="number" placeholder='Maks' className={styles.maxPrice} />
          </div>

          <div className={styles.options}>
            <select name="currency" className={styles.currency}>
              <option value="AZN">AZN</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>

            <button className={styles.credit}>Kredit</button>

            <button className={styles.barter}>Barter</button>
          </div>


          <select name="ban" className={styles.ban}>
            <option value="ban">Ban Növü</option>
          </select>

          <div className={styles.year}>
            <select name="min year" className={styles.minYear}>
              <option value="year">Il,min</option>
            </select>
            <select name="max year" className={styles.maxYear}>
              <option value="year">Maks</option>
            </select>
          </div>
        </div>


        <div className={styles.thirdRaw}>
          <div className={styles.new}>
            <p>Bu gün: <span>1385 yeni elan</span></p>
          </div>

          <div className={styles.buttons}>
            <p>Sıfırla</p>

            <select name="more">
              <option value="more" className={styles.more}>Daha çox filtr</option>
            </select>

            <button className={styles.show}>Elanları göstər</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter