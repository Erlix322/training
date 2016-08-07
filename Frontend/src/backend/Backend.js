import 'babel-polyfill';
import 'isomorphic-fetch';

const BACKEND_URL = 'https://localhost:3001';

export function fetchJson(path){
    const url = `${BACKEND_URL}${path}`;

    return fetch(url)
    .then(response => response.json())
    .catch(ex => {
        console.error('parsing failed', ex);
    });
}