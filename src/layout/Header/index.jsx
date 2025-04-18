import styles from './header.module.css'

import React from 'react'
import { FaPlus } from "react-icons/fa6";

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logoNav}>
           <div className={styles.logo}>TURBO.AZ</div> 
           <div className={styles.nav}>
            <p>Bütün elanlar</p>
            <p>Dilerlər</p>
            <p>Avtokataloq</p>
            <p>Moto</p>
            <p>Ehtiyat hissələri və aksesuarlar</p>
            <p>İcarə</p>
           </div>
        </div>
        <div className={styles.btn}>
            <div className={styles.plus}>
                <FaPlus />
            </div>
            <button className={styles.button}>Yeni elan</button>
        </div>
    </div>
  )
}

export default Header