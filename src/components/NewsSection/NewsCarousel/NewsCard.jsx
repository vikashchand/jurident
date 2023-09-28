import React, { useContext } from "react";
import { bookmarkNews, readLaterNews } from "../../../utils/firebase.utils";

import { Link } from "react-router-dom";
import { UserContext } from "../../../context/user.context";
import { truncWithEllipsis } from "../utils";

const NewsCard = ({ title, text, image, url }) => {
	const { currentUser } = useContext(UserContext);
	const handleBookmark = async () => {
		await bookmarkNews(currentUser, { title, text, image, url });
	};

	const handleReadLater = async () => {
		await readLaterNews(currentUser, { title, text, image, url });
	};

	return (
		<article className="card w-72">
			<img src={image} alt={title} className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title font-semi-bold text-xl">{title}</h5>
				<p className="card-text pb-3 text-base font-medium">
					{truncWithEllipsis(text, 150)}
				</p>
				<Link to={url} className="btn btn-primary">
					Read More
				</Link>
				{currentUser && (
					<div>
						<button onClick={handleBookmark} className="btn">
							Bookmark
						</button>
						<button onClick={handleReadLater} className="btn">
							Read Later
						</button>
					</div>
				)}
			</div>
		</article>
	);
};

export default NewsCard;
