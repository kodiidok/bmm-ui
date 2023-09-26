import styles from "@/styles/searchbar.module.css";
import { Search } from 'react-feather';

export default function Searchbar() {
  return(
    <div className={styles['searchbar']}>
      <Search color="#64748B" size={15}/>
      <input type="text" placeholder="Search artists, bands, events ..." className={styles.searchInput} />
    </div>
  )
}