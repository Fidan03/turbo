import styles from './info.module.css'
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";


import React from 'react'

const Info = () => {
  return (
    <div className={styles.container}>
        <div className={styles.link}>
            <p>Tap.az</p>
            <p>Bina.az</p>
            <p>Boss.az</p>
        </div>
        <div className={styles.connection}>
            <div className={styles.support}>
                <p>Dəstək:</p>
                <p>(012) 526-47-47</p>
            </div>
            <p>Yardım</p>
            <p>RU</p>
            <div className={styles.like}>
                <div className="likeIcon">
                    <CiHeart />
                </div>
                <p>Seçilmişlər</p>
            </div>
            <div className={styles.profile}>
                <div className="profileIcon">
                    <CgProfile />
                </div>
                <p>Giriş</p>
            </div>

        </div>
    </div>
  )
}

export default Info