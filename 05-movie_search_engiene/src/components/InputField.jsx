import styles from "./InputField.module.css";
import { useState } from "react";

function InputField({setSearch}) {
  const [search_key,setSearch_key]=useState('')
  return (
    <div className={`text-center ${styles.container}`}>
      <div className="row">
        <div className="col-8">
          <input
            className={styles.input}
            type="text"
            placeholder="Search movies..."
            onKeyDown={(e)=>{
              setSearch_key(e.target.value)
              if(e.key==='Enter'){
                setSearch(search_key)
              }
            }}
          ></input>
        </div>
        <div className="col-3 d-flex justify-content-end">
          <button type="button" className={`btn btn-success ${styles.addbtn}`} 
            onClick={()=>setSearch(search_key)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputField;
