import axios from 'axios'


const fetchDataCount = (count) => {
    let data;
    axios.get(`http://localhost:8000/recipe/random/${count}`)
        .then(response => {
            data = response.data;
        })
        .catch(error => {
            console.error('Error fetching recipes', error);
        });

    return data
}

module.exports = { fetchDataCount }