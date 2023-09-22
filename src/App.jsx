import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./Screen/About/About";
import About_Us_Page from "./components/Profile/About_Us_Page";
import AllNewsScreen from "./Screen/NewsScreen/SubScreens/AllNewsScreen";
import Blog from "../src/components/Blogf/Blog";
import Blogs from "./Screen/Blogs/Blogs";
import BookmarksScreen from "./Screen/NewsScreen/SubScreens/BookmarksScreen";
import ChangePass_Page from "./components/Profile/ChangePass_Page";
import ChatBot from "./components/ChatBot/ChatBot";
import ContactPage from "./Screen/Contactus/ContactPage";
import FeedScreen from "./Screen/NewsScreen/SubScreens/FeedScreen";
import Home from "./Screen/Home/Home";
import Login from "./Screen/Loginscreen/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import NewsScreen from "./Screen/NewsScreen";
import { Profile } from "./components/Profile/Profile";
import Register from "./Screen/Registerscreen/Register/Register";
import Services from "./Screen/Services/Services";
import { Terms_and_Condition } from "./components/Profile/Terms_and_Conditions";
import TopNewsScreen from "./Screen/NewsScreen/SubScreens/TopNewsScreen";
import TrendingScreen from "./Screen/NewsScreen/SubScreens/TrendingScreen";
import UnreadScreen from "./Screen/NewsScreen/SubScreens/UnreadScreen";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/news" element={<NewsScreen />}>
						<Route path="bookmarks" element={<BookmarksScreen />} />
						<Route path="feed" element={<FeedScreen />} />
						<Route path="top" element={<TopNewsScreen />} />
						<Route path="trending" element={<TrendingScreen />} />
						<Route path="unread" element={<UnreadScreen />} />
						<Route index path="*" element={<AllNewsScreen />} />
					</Route>

					{/* <Route path="/news" element={<Homee />} /> */}
					{/* <Route path = "/home" element = {<Newss/>}/> */}
					{/* {articles.map(article => {
						const {
							id,
							title,
							text,
							summary,
							url,
							image,
							author,
							language,
							source_country,
							sentiment,
						} = article;
						return (
							<Route
								path={id}
								element={
									<News
										title={title}
										text={text}
										summary={summary}
										url={url}
										image={image}
										author={author}
										language={language}
										source_country={source_country}
										sentiment={sentiment}
									/>
								}
							/>
						);
					})} */}

					<Route path="/Services" element={<Services />} />
					<Route path="/About" element={<About />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					{/* <Route path="/News" element={<News />} /> */}
					<Route path="/profile/about" element={<About_Us_Page />} />
					<Route exact path="/Blogs" element={<Blogs />} />
					<Route exact path="/Blogs/:topic" element={<Blog />} />
					<Route path="/Contact" element={<ContactPage />} />
					<Route path="/profile" element={<Profile />} />
					<Route
						path="/profile/terms"
						element={<Terms_and_Condition />}
					/>
					<Route path="/profile/about" element={<About_Us_Page />} />
					<Route
						path="/profile/changepassword"
						element={<ChangePass_Page />}
					/>
				</Routes>
			</Router>
			<ChatBot />
		</>
	);
}

export default App;
