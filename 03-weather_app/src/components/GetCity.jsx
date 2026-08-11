import styles from "./GetCity.module.css";

const GetCity = ({setCity}) => {

  return (
    <div className={`text-center ${styles.inputdiv}`}>
      <div className="row">
        <div className="col-6">
          <input
            className={styles.input}
            type="text"
            placeholder="Enter City"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="col-5 d-flex justify-content-end">
          <button
            type="button"
            className={`btn btn-primary ${styles.searchbtn}`}
            onClick={()=>{
              setCity("")
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetCity;
