import React from 'react'
import styles from './Skills.module.css'
import {Skill} from './Skill/Skill';

export function Skills(props: any) {
    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, autem consectetur deserunt dicta doloribus eos itaque laboriosam nam, nesciunt nulla quas qui quis temporibus? Atque cumque dolorem impedit libero tempore!'

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'CSS'} description={description}/>
                    <Skill title={'JS'} description={description}/>
                    <Skill title={'React'} description={description}/>
                </div>
            </div>
        </div>
    )
}