import axios from 'axios'


const fetchData = (count) => {
    let data;
    axios.get(`http://localhost:8000/recipe}`)
        .then(response => {
            data = response.data;
        })
        .catch(error => {
            console.error('Error fetching recipes', error);
        });
    return data
}

module.exports = { fetchData }