import axios from "axios";

export const NEWS_PAGE_SIZE = 12;

const API = axios.create({
	baseURL: "https://api.worldnewsapi.com/search-news",
});

API.interceptors.request.use(config => ({
	...config,
	params: {
		number: NEWS_PAGE_SIZE,
		text: "law",
		language: "en",
		"api-key": "b9368fcfe9094e87b846a3ce6797cbb8",
		"source-countries": "in",
		sort: "publish-time",
		"sort-direction": "DESC",
		"earliest-publish-date": "2023-08-22",
		"latest-publish-date": new Date().toISOString().split("T")[0],
		...config.params,
	},
}));
export default API;
