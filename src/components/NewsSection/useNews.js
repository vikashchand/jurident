import { useEffect, useState } from "react";
import API, { NEWS_PAGE_SIZE } from "./utils/api";

const useNews = (url, params) => {
	const [news, setNews] = useState([]);
	const [offset, setOffset] = useState(0);
	const [totalNews, setTotalNews] = useState(0);

	useEffect(() => {
		(async () => {
			const res = await API.get(url, {
				params: { offset, ...params },
			});
			if (res.status !== 200) {
				console.warn(res.statusText);
				return;
			}

			setNews(res.data.news);
			setTotalNews(res.data.available);
		})();
	}, [offset]);

	const prevPage = () =>
		setOffset(prev => (prev === 0 ? 0 : prev - NEWS_PAGE_SIZE));
	const nextPage = () => setOffset(prev => prev + NEWS_PAGE_SIZE);

	const canGoPrev = offset > 0;
	const canGoNext = offset + NEWS_PAGE_SIZE <= totalNews;

	return {
		news,
		offset,
		totalNews,
		prevPage,
		nextPage,
		canGoNext,
		canGoPrev,
	};
};

export default useNews;
