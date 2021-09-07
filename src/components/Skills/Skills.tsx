import React from 'react'
import styles from './Skills.module.css'
import {SkillsItem} from './SkillsItem/SkillsItem';

export function Skills(props: any) {
    return (
        <div className={styles.body}>
            <div className={styles.table}>
                <div className={styles.header}>
                    <h2>Мои скиллы</h2>
                </div>
                <div className={styles.tableBody}>
                    <SkillsItem/>
                    <SkillsItem/>
                    <SkillsItem/>
                </div>
            </div>
        </div>
    )
}