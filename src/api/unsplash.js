import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 5d994bb8a3a06470dfa3d216fe0b0cb49e19999958212601dffdded000904f69'
	}
});
