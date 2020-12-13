const BASE_URL = 'https://swapi.dev/api/starships/'

export function getAllStarships() {
    return fetch (`${BASE_URL}`).then(res => res.json())
};