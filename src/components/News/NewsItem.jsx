import React, { Component, useContext } from "react";

import { bookmarkNews, readLaterNews } from "../../utils/firebase.utils";
import { UserContext } from "../../context/user.context";
import { async } from "@firebase/util";

const NewsItem = ({ id, title, text, image, url, author, sentiment }) => {
	const { currentUser } = useContext(UserContext);

	const handleBookmark = async () => {
		await bookmarkNews(currentUser, id);
	};
	const handleReadLater = async () => {
		await readLaterNews(currentUser, id);
	};

	return (
		<div className="mx-4 my-4">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src={
						!image
							? "https://www.infoworld.com/article/3679489/the-best-new-features-in-nextjs-13.html"
							: image
					}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title text-xl font-semibold">
						{title}
					</h5>
					<p className="card-text pb-3 text-base font-medium">
						{text}
					</p>
					<a
						rel="noreferrer"
						target="_blank"
						href={url}
						className="btn btn-primary"
					>
						Read More
					</a>
					<button onClick={handleBookmark}>Bookmark</button>
					<button onClick={handleReadLater}>Read Later</button>
				</div>
			</div>
		</div>
	);
};

export default NewsItem;
