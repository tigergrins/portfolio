import React from 'react'
import styles from './Hello.module.css'
import photo from '../../assets/images/butler.png'

export function Hello(props: any) {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <span>Hi</span>
                    <p>I'm Danila Bokun</p>
                    <p>Front-end developer</p>
                </div>
                <div className={styles.photo}>
                    <img src={photo} alt="photo"/>
                </div>
            </div>
        </div>
    )
}