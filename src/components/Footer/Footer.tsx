import React from 'react'
import styles from './Footer.module.css'

export function Footer(props: any) {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <span>Данила Бокун</span>
                <div className={styles.row}></div>
                <span>© 2021 Все права защищены</span>
            </div>
        </div>
    )
}