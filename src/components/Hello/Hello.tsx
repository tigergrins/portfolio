import React from 'react'
import styles from './Hello.module.css'
import photo from '../../assets/images/butler.png'

export function Hello(props: any) {
    return (
        <div className={styles.body}>
            <div className={styles.info}>
                <div className={styles.text}>
                    <h2>Привет!</h2>
                    <p>Меня зовут Данила Бокун.</p>
                    <p>Я front-and разработчик.</p>
                </div>
                <div className={styles.photo}><img src={photo} alt="photo"/></div>
            </div>
        </div>
    )
}