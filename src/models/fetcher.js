
// import msg from './messages'
const BASE_URL = "http://localhost:3333"

const createHeader = (method, body) => {
    const encodeFormData = (body) => {
        return Object.keys(body)
            .map(key => `${key}=${body[key]}`)
            // .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    }
    const { token }  = JSON.parse(sessionStorage.getItem('user')) || ''
    const header = {
        method: method,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'auth': `${token || ''}` 
        },
        body: encodeFormData(body)
    }

    return header
}

function fetcher(url, header) {
    return fetch(url, header)
        .then(checkForErrors)
        .then(res => {
            // let message = msg(res.status)
            // if (message) {
            //     return message
            // }
            return res.json()
        })
        // .catch(console.log)
}

function getData(endpoint) {
    return fetcher(BASE_URL + endpoint)

}

function postData(endpoint, body) {
    const header = createHeader('POST', body)
    return fetcher(BASE_URL + endpoint, header)

}

function putData(endpoint, body) {
    const header = createHeader('PUT', body)
    return fetcher(BASE_URL + endpoint, header)
}

const checkForErrors = (res) => {
    if (!res.ok) {
        // let message = msg(res.status)
        throw new Error(res)
    }
    return res;
}

export { getData, postData, putData }