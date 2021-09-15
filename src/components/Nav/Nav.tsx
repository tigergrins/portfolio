import React from 'react'
import styles from './Nav.module.css'

export function Nav(props: any) {
    return (
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className="style.li"><a href="#">Main</a></li>
                    <li className="style.li"><a href="#">Skills</a></li>
                    <li className="style.li"><a href="#">Projects</a></li>
                    <li className="style.li"><a href="#">Contacts</a></li>
                </ul>
            </nav>
    )
}