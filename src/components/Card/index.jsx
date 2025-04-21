import React from 'react'
import styles from './card.module.css'
import { CiHeart } from "react-icons/ci";
import { useNavigate } from 'react-router';

const Card = (props) => {

    const navigate = useNavigate();
    



  return (
    <div className={styles.card} onClick={() => navigate('/card')}>
        <div className={styles.container}>
            <div className={styles.cardHeader}>
                <div className={styles.img}>
                    <img src={props.img} alt="Car Image" />
                </div>
             <div className={styles.icon}>
                    <CiHeart />
                </div>
            </div>
            <div className={styles.cardMain}>
                <p className={styles.price}>{props.price}</p>
                <div className={styles.modelBrand}>
                    <p className={styles.model}>{props.brand}</p>
                    <p className={styles.brand}>{props.model}</p>
                </div>
                <div className={styles.yearEngine}>
                    <p className={styles.year}>{props.year},</p>
                    <p className={styles.engine}>{props.engine},</p>
                    <p className={styles.mileage}>{props.mileage}</p>
                </div>
            </div>
            <div className={styles.cardFooter}>
                <p className={styles.city}>
                Bakı,
                    <span className={styles.time}>bugün 14:58</span>
                </p>
            </div>
        </div>
    </div>

  )
}

export default Card