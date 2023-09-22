import React from "react";
import NewsCarousel from "../../../components/NewsSection/NewsCarousel";
import useNews from "../../../components/NewsSection/useNews";

const TrendingScreen = () => {
	const { news, canGoNext, canGoPrev, nextPage, prevPage } = useNews("/", {
		text: "law india trending",
	});

	return (
		<section className="mt-4 space-y-12">
			<h1 className="text-center text-2xl font-bold">Trending News</h1>
			<NewsCarousel
				newsArr={news}
				nextBtnDisabled={!canGoNext}
				onNextClick={nextPage}
				prevBtnDisabled={!canGoPrev}
				onPrevClick={prevPage}
			/>
		</section>
	);
};

export default TrendingScreen;
