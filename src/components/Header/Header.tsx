import React from 'react'
import { Nav } from '../Nav/Nav'
import styles from './Header.module.css'

export function Header(props: any) {
    return (
        <div className={styles.header}>
            <Nav />
        </div>
    )
}