
export function getAllStarships(pageUrl) {
    if (pageUrl) {
        pageUrl = pageUrl.split("http");
        pageUrl.shift()
        pageUrl.unshift('https')
        pageUrl = pageUrl.join('')
    }
    const url = pageUrl || 'https://swapi.dev/api/starships/'
    return fetch (url)
    .then(res => res.json())
};