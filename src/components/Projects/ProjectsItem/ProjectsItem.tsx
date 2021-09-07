import React from 'react'
import styles from './ProjectsItem.module.css';
import project from './../../../assets/images/project.png'

export function ProjectsItem(props: any) {
    return (
        <div className={styles.body}>
            <div className={styles.image}><img src={project} alt="icon"/></div>
            <button>Смотреть</button>
            <div className={styles.text}>
                <h3>Название проекта</h3>
                <div className={styles.description}>Краткое описание проекта.</div>
            </div>
        </div>
    )
}