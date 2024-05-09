import './App.css';
import Navbar from './component/navbar/Navbar';
import Main from './component/main/Main';
import { useEffect, useState } from 'react';

function App() {
    const url = "https://restcountries.com/v3.1/all";

    const [countries, setCountries] = useState([]);
    const [originalCountries, setOriginalCountries] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setCountries(data);
                setOriginalCountries(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSearch = (query) => {
        if (query.trim() === '') {
            setCountries(originalCountries);
        } else {
            const filtered = originalCountries.filter((country) =>
                country.name.common.toLowerCase().includes(query.toLowerCase())
            );
            setCountries(filtered);
        }
    };

    return (
        <div>
            <Navbar onSearch={handleSearch} />
            <Main countries={countries} />
        </div>
    );
}

export default App;
