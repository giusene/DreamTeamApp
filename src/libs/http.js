const BASE_URL = 'http://api.football-data.org/v2';

const httpGetLegue = (id) =>
    fetch(BASE_URL + `/competitions/${id || 2019}/teams`, {
        method: "GET",
        headers: {
            "X-Auth-Token": process.env.REACT_APP_FOOTBALL_API_KEY
        }
    }).then(response => response.json());


const httpGetTeam = (id) =>
    fetch(BASE_URL + '/teams/' + id, {
        method: "GET",
        headers: {
            "X-Auth-Token": process.env.REACT_APP_FOOTBALL_API_KEY
        }
    }).then(response => response.json());


const httpGetImage = (query) =>
    fetch(`https://api.qwant.com/v3/search/images?count=1&q=${query}&t=images&safesearch=1&locale=it_IT&offset=0&device=desktop`)
        .then(response => response.json());

export { httpGetLegue, httpGetTeam, httpGetImage }