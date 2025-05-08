import styles from './header.module.css'
import { FaShoppingCart } from "react-icons/fa";
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router';


const Header = () => {

  const navigate = useNavigate();

  function click () {
    navigate('/cart')
  }


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
        <div className={styles.cart}>
          <FaShoppingCart onClick={click()} style={{color:'white'}}/>
        </div>
    </div>
  )
}

export default Header