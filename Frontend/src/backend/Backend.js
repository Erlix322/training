import 'babel-polyfill';
import 'isomorphic-fetch';

const BACKEND_URL = 'http://twin322.hopto.org:52512';

export function fetchJson(path){
    const url = `${BACKEND_URL}${path}`;
    return fetch(url)
    .then(response => response.json())
    .catch(ex => {
        console.error('parsing failed', ex);
    });
}

export function sendJson(method,path,payload){
   const url = `${BACKEND_URL}${path}`;
   console.log(payload);
   return fetch(url, {
       method:method,
       body:JSON.stringify(payload),
       headers:{
           'Accept': 'application/json',
           'Content-Type' : 'application/json'
       }
   }).then(response => response.json())
   .catch(e => {
        console.log("Failed request!");
    });
}