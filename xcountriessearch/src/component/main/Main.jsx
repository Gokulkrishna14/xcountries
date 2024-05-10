import CountryCard from "../CountryCard/CountryCard";
import styles from "./Main.module.css";

const Main= ({countries}) => {
    console.log(countries);
    return(
        <div className={styles.main}>
            {countries.map((country, index) => ( 
                <CountryCard country={country} index={index} />
            ))}
        </div>
    )
};

export default Main;