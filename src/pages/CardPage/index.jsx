import styles from './cardPage.module.css'
import { CiHeart } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import bmw from '../../assets/images/bmw.avif'
import pp from '../../assets/images/pp.jpg'
import logo from '../../assets/images/logo.png'

import React from 'react'

const CardPage = () => {
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
                <div className={styles.contactInfo}>
                    <p className={styles.price}>52000$</p> 
                    <div className={styles.profile}>
                        <div className={styles.sellerInfo}>
                            <p className={styles.seller}></p>
                            <p className={styles.city}></p>
                        </div>
                        <div className={styles.profileImg}>
                            <img src={pp} alt="Profile Photo" />
                        </div>
                    </div>
                    <button className={styles.call}>Call</button>
                </div>
            </div>
            <div className={styles.cardFooter}>
                <p>Şəhər <span>Bakı</span></p>
                <p>Marka <span>BMW</span></p>
                <p>Model <span>X5</span></p>
                <p>Buraxılış ili <span>2021</span></p>
                <p>Rəng <span>Qara</span></p>
                <p>Mühərrik <span>3.0L I6 Turbo</span></p>
                <p>Yürüş <span>35000</span></p>
            </div>
        </div>
    </div>
  )
}

export default CardPage