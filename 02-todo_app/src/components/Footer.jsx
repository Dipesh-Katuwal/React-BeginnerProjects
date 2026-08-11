import styles from "./Footer.module.css";

const Footer = ({todoItems,setTodoItems}) => {
  return (
    <>
      <hr className={styles.hr} />
      <div className={styles.footerdiv}>
        <p>
          <u className={styles.left}>{todoItems.length} items left</u>
        </p>
        <button type="button" className={`${styles.mybtn} btn btn-danger d-flex justify-content-end fs-6`} onClick={()=> setTodoItems([])}>
          Clear All
        </button>
      </div>
    </>
  );
};

export default Footer;
