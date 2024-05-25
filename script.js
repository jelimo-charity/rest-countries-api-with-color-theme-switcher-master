document.addEventListener('DOMContentLoaded', () => {
    let response = [];

    const fetchData = async () => {
        try {
            const countriesData = await fetch('./data.json');
            response = await countriesData.json();
            displayCountries(response); // Initial display with fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const inputCountry = document.getElementById('inputCountry');
    const selectBtn = document.getElementById('selectBtn');
    const displayData = document.getElementById('displayData');

    // Function to display countries
    const displayCountries = (countries) => {
        displayData.innerHTML = '';
        countries.forEach(country => {
            const countryCard = document.createElement('div');
            countryCard.classList.add('card');

            countryCard.innerHTML = `
                <img src="${country.flags.png}" alt="Flag of ${country.name}">
                <p><strong>Country:</strong> ${country.name}</p>
                <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                <p><strong>Region:</strong> ${country.region}</p>
                <p><strong>Capital:</strong> ${country.capital}</p>
            `;
            displayData.appendChild(countryCard);
        });
    };

    // Function to filter countries based on input and select
    const filterCountries = () => {
        const searchText = inputCountry.value.toLowerCase();
        const selectedRegion = selectBtn.value;

        const filteredCountries = response.filter(country => {
            const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
            const matchesSearch = country.name.toLowerCase().includes(searchText);
            return matchesRegion && matchesSearch;
        });

        displayCountries(filteredCountries);
    };

    // Event listeners
    inputCountry.addEventListener('input', filterCountries);
    selectBtn.addEventListener('change', filterCountries);

    // Fetch data and initial display
    fetchData();
});


    // Toggle dark mode
    const darkModeToggle = document.getElementById('darkmode-toggle');
    darkModeToggle.addEventListener('change', toggleDarkMode);
  
    if (localStorage.getItem('dark-mode') === 'enabled') {
      document.body.classList.add('dark-mode');
      darkModeToggle.checked = true;
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
          localStorage.setItem('dark-mode', 'enabled');
        } else {
          localStorage.setItem('dark-mode', 'disabled');
        }
      }