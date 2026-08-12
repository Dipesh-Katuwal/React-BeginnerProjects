import { useContext } from 'react'
import styles from './Card.module.css'
import { ClickContext } from '../store/ClickContext'

export function Card({fruit_icon,index,fruit,tick}){
  const {clickHandler}=useContext(ClickContext)
  return (
    <div className={`${styles.card}`} onClick={()=>clickHandler(index,fruit)}>
      <div className={styles.icon}>{fruit_icon}</div>
      <div className={styles.tick}>{tick}</div>
    </div>
  )
}