// import dataUrl from '../src/data.js';

// //const baseUrl = 'https://my-json-server.typicode.com/iradukundajp/Movies-list/movies';

// const handleResponse = async (response) => {
//     if (!response.ok) {
//         throw new Error(`Request failed with status: ${response.status}`);
//     }
//     return await response.json();
// };

// const addMovie = async (method, data = null) => {
//     try {
//         const headers = {
//             'Content-Type': 'application/json'
//         };
//         let body;

//         if (method === 'POST') {
//             body = JSON.stringify(data);
//         }

//         const response = await fetch(dataUrl.baseUrl, {
//             method,
//             headers,
//             body
//         });

//         return await handleResponse(response);
//     } catch (err) {
//         console.error(err);
//         return null;
//     }
// };

// export default addMovie;
import data from '../src/data.js';

const addMovie = async (bodyData) => {
    try {
        const res = await fetch(data.baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(bodyData)
        });
        if (!res.ok) {
            throw new Error(
                `Failed to fetch movies with status : ${res.status}`
            );
        }
        return await res.json();
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default addMovie;
