import NewsCarousel from "../../../components/NewsSection/NewsCarousel";
import React from "react";
import useNews from "../../../components/NewsSection/useNews";

const AllNewsScreen = () => {
	const { news, canGoNext, canGoPrev, nextPage, prevPage } = useNews("/", {
		text: "law india",
	});

	return (
		<section className="mt-4 space-y-12">
			<h1 className="text-center text-2xl font-bold">All News</h1>
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

export default AllNewsScreen;
