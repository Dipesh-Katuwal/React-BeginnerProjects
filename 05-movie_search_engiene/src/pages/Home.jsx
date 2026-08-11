import MovieBox from "../components/MovieBox"
import InputField from "../components/InputField"
import Footer from "../components/Footer"
import styles from './Home.module.css'

function Home({movies,setSearch}){
  return (
    <main className={styles.home}>
      <InputField setSearch={setSearch} />
      <MovieBox movies={movies} />
      <Footer />
    </main>
  )
}

export default Home