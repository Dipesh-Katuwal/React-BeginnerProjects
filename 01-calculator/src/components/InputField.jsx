import styles from './InputField.module.css'

let InputField = ({displaycal}) => {
  return (
    <div>
      <input className={styles.inputfield} value={displaycal} readOnly></input>
    </div>
  );
};

export default InputField;
