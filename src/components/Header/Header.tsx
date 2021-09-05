import React from 'react'
import styles from './Header.module.css'

export function Header(props: any) {
    return (
        <div className={styles.header}>
            <span>Header</span>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className="style.li">Главная</li>
                    <li className="style.li">Скиллы</li>
                    <li className="style.li">Работы</li>
                    <li className="style.li">Контакты</li>
                </ul>
            </nav>
        </div>
    )
}