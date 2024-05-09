import styles from "./Main.module.css";

const Main= ({countries}) => {
    console.log(countries);
    return(
        <div className={styles.main}>
            {countries.map((country, index) => ( 
                <div key={index} className={styles.countryCard}>
                    <img src={country.flags.png} alt={country.flags.svg} width={"100px"} height={"100px"} /> 
                    <h3>{country.name.common}</h3>
                </div>
            ))}
        </div>
    )
};

export default Main;