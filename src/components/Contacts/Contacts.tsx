import React from 'react'
import styles from './Contacts.module.css'

export function Contacts(props: any) {
    return (
        <div className={styles.body}>
                <h3>Контакты</h3>
                <form className={styles.form} action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
                <button className={styles.button}>Отправить</button>
        </div>
    )
}