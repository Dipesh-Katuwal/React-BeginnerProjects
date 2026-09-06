import styles from "./Loading.module.css"
import { IoLogoBitcoin } from "react-icons/io5";


export function Loading() {
  return (
    <div className={styles.loader_container}>
      <div className={styles.coin_loader}><IoLogoBitcoin />
</div>
    </div>
  );
}