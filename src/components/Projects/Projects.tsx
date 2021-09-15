import React from 'react'
import styles from './Projects.module.css';
import {Project} from './ProjectsItem/Project';

const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, autem consectetur deserunt dicta doloribus eos itaque laboriosam nam, nesciunt nulla quas qui quis temporibus? Atque cumque dolorem impedit libero tempore!'

export function Projects(props: any) {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>
                    <Project title={'Project\'s name'} description={description}/>
                    <Project title={'Project\'s name'} description={description}/>
                </div>
            </div>
        </div>
    )
}