import styles from './cardPage.module.css'
import { CiHeart } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import bmw from '../../assets/images/bmw.avif'
import pp from '../../assets/images/pp.jpg'
import logo from '../../assets/images/logo.png'
import React from 'react'
// import { useNavigate } from 'react-router';

const CardPage = () => {
    // const navigate = useNavigate;

  return (
    <div className={styles.cardPage}>
        <div className={styles.container}>
            <div className={styles.cardHeader}>
                <div className={styles.logoModel}>
                    <div className={styles.logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <p className={styles.carName}>BMW x5, 2021 il, 35000 km</p>
                </div>
                <div className={styles.icons}>
                    <div className={styles.save}>
                        <div className={styles.saveIcon}>
                            <CiHeart />
                        </div>
                        <p className={styles.saveText}>Seçilmişlərdə saxla</p>
                    </div>
                    <div className={styles.report}>
                        <div className={styles.reportIcon}>
                            <CiFlag1 />
                        </div>
                        <p className={styles.reportText}>Şikayət et</p>
                    </div>
                </div>
            </div>


            <div className={styles.cardMain}>
                <div className={styles.carImg}>
                    <img src = {bmw} alt="Car Image" />
                </div>
            </div>
            
            <div className={styles.cardFooter}>
                <div className={styles.characteristics}>
                    <p>Şəhər</p>
                    <p>Marka</p>
                    <p>Model</p>
                    <p>Buraxılış ili</p>
                    <p>Rəng</p>
                    <p>Mühərrik</p>
                    <p>Yürüş</p>
                </div>
                <div className={styles.description}>
                    <p>Bakı</p>
                    <p>BMW</p>
                    <p>X5</p>
                    <p>2021</p>
                    <p>Qara</p>
                    <p>3.0L I6 Turbo</p>
                    <p>35000</p>
                </div>

            </div>
        </div>

        <div className={styles.contactInfo}>
            <p className={styles.price}>52000$</p> 
            <div className={styles.profile}>
                <div className={styles.sellerInfo}>
                    <p className={styles.seller}>Alı</p>
                    <p className={styles.city}>Baku</p>
                </div>
                <div className={styles.profileImg}>
                    <img src={pp} alt="Profile Photo" />
                </div>
            </div>
            <button className={styles.call}>Call</button>
        </div>
    </div>
  )
}

export default CardPage