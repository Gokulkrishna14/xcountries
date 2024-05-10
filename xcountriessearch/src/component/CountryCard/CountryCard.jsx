import "./CountryCard.module.css";


const CountryCard = ({ country }) => {
    return (
        <div className="countryCard">
            <img src={country.flags.png} alt={country.flags.svg} width={"100px"} height={"100px"} /> 
            <h2>{country.name.common}</h2>
        </div>
    );
};

export default CountryCard;
