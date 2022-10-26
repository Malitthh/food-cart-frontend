const apiUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:5000/api' // development api
    : 'http://localhost:5000/api'; // production api

    const clientBaseURL = 'http://localhost:3000/api'
    const clientBaseURLImages = 'http://localhost:3000/'
    export {
        apiUrl,
        clientBaseURL,
        clientBaseURLImages
    };