import React from 'react'
import styles from './SkillsItem.module.css'
import reactIcon from '../../../assets/images/react.png'

export function SkillsItem(props: any) {
    return (
        <div className={styles.body}>
            <div className={styles.icon}><img src={reactIcon} alt="icon"/></div>
            <div className={styles.text}>
                <h3>React</h3>
                <div className={styles.description}>Подробное описание навыка.</div>
            </div>
        </div>
    )
}