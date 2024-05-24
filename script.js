// import data from './data.js';

// document.addEventListener('DOMContentLoaded', () => {
//     const inputCountry = document.getElementById('inputCountry');
//     const selectBtn = document.getElementById('selectBtn');
//     const displayData = document.getElementById('displayData');

//     // Function to display countries
//     const displayCountries = (countries) => {
//         displayData.innerHTML = '';
//         countries.forEach(country => {
//             const countryCard = document.createElement('div');
//             countryCard.classList.add('card');

//             countryCard.innerHTML = `
//                 <img src="${country.flags.png}" alt="Flag of ${country.name}">
//                 <p><strong>Country:</strong> ${country.name}</p>
//                 <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
//                 <p><strong>Region:</strong> ${country.region}</p>
//                 <p><strong>Capital:</strong> ${country.capital}</p>
//             `;
//             displayData.appendChild(countryCard);
//         });
//     };

//     // Function to filter countries based on input and select
//     const filterCountries = () => {
//         const searchText = inputCountry.value.toLowerCase();
//         const selectedRegion = selectBtn.value;

//         const filteredCountries = data.filter(country => {
//             const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
//             const matchesSearch = country.name.toLowerCase().includes(searchText);
//             return matchesRegion && matchesSearch;
//         });

//         displayCountries(filteredCountries);
//     };

//     // Event listeners
//     inputCountry.addEventListener('input', filterCountries);
//     selectBtn.addEventListener('change', filterCountries);

//     // Initial display
//     displayCountries(data);
// });
