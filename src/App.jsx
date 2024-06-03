import Boxtext from "./Boxtext"
import Img from "./Img"
import styles from './App.module.css'


export default function App() {
  return(
    <div className={styles.layout}>
    <Boxtext />
    <Img />
    </div>
  )
}