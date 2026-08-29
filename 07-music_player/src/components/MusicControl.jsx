import styles from "./MusicControl.module.css";

export function MusicControl({children}) {
  return (
    <div className={styles.musicControlContainer}>
      {children}
    </div>
  );
}
