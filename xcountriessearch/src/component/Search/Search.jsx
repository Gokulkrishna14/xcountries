import styles from "./Search.module.css";

const Search = ({ placeholder, onSearch }) => {
    const handleChange = (e) => {
        onSearch(e.target.value);
    };

    return <input type="text" placeholder={placeholder} onChange={handleChange} className={styles.searchBox} />;
};

export default Search;
