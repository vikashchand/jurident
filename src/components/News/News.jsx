import React, { Component } from "react";

import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { Helmet } from "react-helmet-async";

export default class News extends Component {
	
	static defaultProps = {
		source_country: "in",
		offset: 0,
		title: "Politics",
	};

	static propTypes = {
		source_country: PropTypes.string,
		offset: PropTypes.number,
		title: PropTypes.string,
	};

	constructor() {
		super();
		console.log("Hello I am a constructor from NewsItem");
		this.state = {
			news: [],
			loading: false,
			number: 10,
		};
	}

	async componentDidMount() {
		console.log("cdm");
		let apiUrl = `https://api.worldnewsapi.com/search-news?text=India+law&source-countries=${this.props.source_country}&earliest-publish-date=2023-08-22&latest-publish-date=2023-09-05&api-key=b9368fcfe9094e87b846a3ce6797cbb8&number=10&offset=0`;

		this.setState({ loading: true });
		let data = await fetch(apiUrl);
		let parsedData = await data.json();
		console.log(parsedData);
		this.setState({
			news: parsedData.news,
			available: parsedData.available,
			loading: false,
		});
	}

	handlePrevClick = async () => {
		console.log("Previous");

		this.setState({
			offset: this.state.offset - 10,
		});

		let apiUrl = `https://api.worldnewsapi.com/search-news?text=India+law&source-countries=${this.props.source_country
			}&earliest-publish-date=2023-08-22&latest-publish-date=2023-09-05&api-key=b9368fcfe9094e87b846a3ce6797cbb8&number=10
		&offset=${this.state.offset - 10}`;
		this.setState({ loading: true });
		let data = await fetch(apiUrl);
		let parsedData = await data.json();
		this.setState({ loading: false });

		this.setState({
			offset: this.state.offset - 10,
			news: parsedData.news,
			loading: false,
		});

	};

	handleNextClick = async () => {
		console.log("Next");
		if (
			this.state.offset + 10 >
			Math.ceil(this.state.available / 10)
		) {
		} else {
			console.log("cdm");
			let apiUrl = `https://api.worldnewsapi.com/search-news?text=India+law&source-countries=${this.props.source_country
				}&earliest-publish-date=2023-08-22&latest-publish-date=2023-09-05&api-key=b9368fcfe9094e87b846a3ce6797cbb8&number=10
			&offset=${this.props.offset + 10}`;
			this.setState({ loading: true });
			let data = await fetch(apiUrl);
			let parsedData = await data.json();
			this.setState({ loading: false });

			this.setState({
				offset: this.state.offset + 10,
				news: parsedData.news,
				loading: false,
			});
		}
	};

	render() {
		return (
			<>

				<Helmet>

					<title>News Page</title>
					<meta name="description" content="Jurident News Page" />
				</Helmet>


				<div className="my-3 ">
					{this.state.loading && <Spinner />}
					<div className="row flex">
						{!this.state.loading &&
							this.state.news.map(element => {
								return (
									<div
										className="col flex flex-wrap justify-evenly"
										key={element.url}
									>
										<NewsItem
											className="justify-around"
											id={element.id}
											title={
												element.title
													? element.title.slice(0, 50)
													: ""
											}
											text={
												element.text
													? element.text.slice(0, 95)
													: ""
											}
											image={
												element.image
													? element.image
													: "https://i.ytimg.com/vi/6xx6UYhJw-E/maxresdefault.jpg"
											}
											url={
												element.url
													? element.url
													: "https://www.youtube.com/watch?v=6xx6UYhJw-E"
											}
										/>
									</div>
								);
							})}
					</div>
					<div className="flex justify-around pb-10">
						<button
							// disabled={this.state.offset <= 0}
							type="button"
							className="btn-dark justify-center gap-x-8 rounded-lg border-4 border-indigo-500/75 px-2 py-2 font-bold text-blue-700"
							onClick={this.handlePrevClick}
						>
							&larr; Previous
						</button>

						<button
							// disabled={
							// 	this.state.offset >
							// 	Math.ceil(this.state.available / 10)
							// }
							type="button"
							className=" btn-dark ml-32 justify-items-stretch gap-x-8 rounded-lg border-4 border-indigo-500/75 px-4 py-2 font-bold text-blue-700"
							onClick={this.handleNextClick}
						>
							Next &rarr;
						</button>

						{/* <button disabled={this.state.page<=1} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded onClick={this.handleNextClick}">Next &rarr;</button> */}
					</div>
				</div>

			</>
		);
	}
}
