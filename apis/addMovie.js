const baseUrl = 'http://localhost:5000';

const handleResponse = async (response) => {
    if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
    }
    return await response.json();
};

const addMovie = async (method, data = null) => {
    try {
        let url = `${baseUrl}/movies`;
        const headers = {
            'Content-Type': 'application/json'
        };
        let body;

        if (method === 'POST') {
            body = JSON.stringify(data);
        }

        const response = await fetch(url, {
            method,
            headers,
            body
        });

        return await handleResponse(response);
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default addMovie;
