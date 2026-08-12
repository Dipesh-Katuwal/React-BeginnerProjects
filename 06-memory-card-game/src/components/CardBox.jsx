import styles from "./CardBox.module.css";
import { Card } from "./Card";

export function CardBox({ shuffled_fruits }) {
  
  return (
    <div className={styles.card_box}>
      {shuffled_fruits.map((fruit, index) =>
        fruit.face === 0 ? (
          <Card fruit_icon={fruit.unknown} key={index} index={index} fruit={fruit} tick={fruit.tick}/>
        ) : (
          <Card fruit_icon={fruit.fruit_icon} key={index} index={index} fruit={fruit} tick={fruit.tick}/>
        ),
      )}
    </div>
  );
}
