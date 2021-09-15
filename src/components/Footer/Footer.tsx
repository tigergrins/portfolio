import React from 'react'
import styles from './Footer.module.css'

export function Footer(props: any) {
    return (
        <div className={styles.footer}>
                <span>Данила Бокун</span>
                <div className={styles.icons}>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                </div>
                <span>© 2021 Все права защищены</span>
        </div>
    )
}