import NewsCard from "./NewsCard";
import React from "react";
import { v4 as uuidV4 } from "uuid";

const NewsCarousel = ({
	newsArr,
	onNextClick,
	onPrevClick,
	prevBtnDisabled,
	nextBtnDisabled,
}) => {
	return (
		<section className="space-y-8 px-16">
			<section className="grid grid-cols-4 items-stretch justify-items-center gap-12">
				{newsArr.map(newsItem => (
					<NewsCard key={uuidV4()} {...newsItem} />
				))}
				{newsArr.length === 0 ? (
					<p className="text-lg font-semibold text-rose-600">
						Oops no news found
					</p>
				) : null}
			</section>
			<div className="flex items-center justify-between gap-4">
				<button
					className="rounded-lg border-4 border-indigo-500/75 p-2 font-bold text-blue-700"
					onClick={onPrevClick}
					disabled={prevBtnDisabled}
				>
					&larr; Previous
				</button>

				<button
					className="rounded-lg border-4 border-indigo-500/75 p-2 font-bold text-blue-700"
					onClick={onNextClick}
					disabled={nextBtnDisabled}
				>
					Next &rarr;
				</button>
			</div>
		</section>
	);
};

export default NewsCarousel;
