import axios from 'axios';

const apiExtractor = axios.create({
	baseURL: `http://localhost:3001/api/DataExtraction/`
});

export {apiExtractor};