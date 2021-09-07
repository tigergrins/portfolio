import React from 'react'
import styles from './RemoteWork.module.css'

export function RemoteWork(props: any) {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <p>Рассматриваю варианты удалённой работы.</p>
                <button>Нанять меня</button>
            </div>
        </div>

    )
}