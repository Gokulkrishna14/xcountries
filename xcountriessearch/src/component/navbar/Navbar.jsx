import Search from "../Search/Search";
import styles from "./Navbar.module.css";

const Navbar = ({ onSearch }) => {
    const handleSearchChange = (query) => {
        onSearch(query); 
    };

    return (
        <div className={styles.navbar}>
            <Search placeholder="Search for countries..." onSearch={handleSearchChange} />
        </div>
    );
};

export default Navbar;
