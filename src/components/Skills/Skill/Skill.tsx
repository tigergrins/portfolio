import React from 'react'
import styles from './Skill.module.css'
import reactIcon from '../../../assets/images/react.png'

type SkillPropsType = {
    title: string
    description: string
}

export function Skill(props: SkillPropsType) {
    return (
        <div className={styles.body}>
            <div className={styles.icon}><img src={reactIcon} alt="icon"/></div>
            <div className={styles.text}>
                <h3>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    )
}