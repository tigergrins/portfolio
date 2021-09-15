import React from 'react'
import styles from './Project.module.css';
import projectImg from './../../../assets/images/project.png'

type ProjectPropsType = {
    title: string
    description: string
}

export function Project(props: ProjectPropsType) {
    return (
        <div className={styles.body}>
            <div className={styles.image}><img src={projectImg} alt="icon"/></div>
            <button>Смотреть</button>
            <div className={styles.text}>
                <h3 className={styles.title}>{props.title}</h3>
                <div className={styles.description}>{props.description}</div>
            </div>
        </div>
    )
}