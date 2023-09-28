import React, { useContext, useEffect, useState } from "react";

import NewsCarousel from "../../../components/NewsSection/NewsCarousel";
import { UserContext } from "../../../context/user.context";
import { getUserReadLaterNews } from "../../../utils/firebase.utils";

const UnreadScreen = () => {
	const [news, setNews] = useState([]);
	const { currentUser } = useContext(UserContext);

	useEffect(() => {
		(async () => {
			const readLaterNews = await getUserReadLaterNews(currentUser);
			if (readLaterNews) setNews(readLaterNews);
		})();
	}, [currentUser]);

	return (
		<section className="mt-4 space-y-12">
			<h1 className="text-center text-2xl font-bold">Read Later News</h1>
			{currentUser ? (
				<NewsCarousel
					newsArr={news}
					nextBtnDisabled={true}
					onNextClick={() => {}}
					prevBtnDisabled={true}
					onPrevClick={() => {}}
				/>
			) : (
				<p className="text-center text-rose-700">
					Need to be logged in
				</p>
			)}
		</section>
	);
};

export default UnreadScreen;
