import React from 'react'
import styles from './Projects.module.css';
import {ProjectsItem} from './ProjectsItem/ProjectsItem';

export function Projects(props: any) {
    return (
        <div className={styles.body}>
            <div className={styles.table}>
                <div className={styles.header}><h2>Мои работы</h2></div>
                <div className={styles.tableBody}>
                    <ProjectsItem />
                    <ProjectsItem />
                </div>
            </div>
        </div>
    )
}