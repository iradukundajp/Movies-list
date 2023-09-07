import dataUrl from '../src/data.js';

const addMovie = async (method, data = null) => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        };
        let body;

        if (data !== null) {
            body = JSON.stringify(data);
        }

        await fetch(dataUrl.baseUrl, {
            method,
            headers,
            body
        });

        // No need to handle the response data
    } catch (err) {
        console.error(err);
    }
};

export default addMovie;
