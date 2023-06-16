import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screen/Home/Home";

import Homee from '../src/components/Mypages/Home'
import Newss from '../src/components/Mypages/MyNews'

import Services from "./Screen/Services/Services";
import About from "./Screen/About/About";
import News from "./Screen/News/News";
import Blogs from "./Screen/Blogs/Blogs";
import Blog from "../src/components/Blogf/Blog";

import ContactPage from "./Screen/Contactus/ContactPage";
import ChatBot from "./components/ChatBot/ChatBot";
import About_Us_Page from "./components/Profile/About_Us_Page";
import Navbar from "./components/Navbar/Navbar";
import {articles} from './components/News/data'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
        
          <Route path = "/home" element = {<Homee/>}/>
          <Route path = "/news" element = {<Newss/>}/>
          {articles.map((article) => {
                        const { id, author, title, description,url, urlToImage, publishedAt,content  } = article;
                        return (
                            <Route
                                path={id}
                                element={
                                    <News
                                        author={author}
                                        title={title}
                                        description={description}
                                        url={url}
                                        urlToImage={urlToImage}
                                        publishedAt={publishedAt}
                                        content={content}
                                    />
                                }
                            />
                        );
                    })}

          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/News" element={<News />} />
          <Route path="/profilee" element={<About_Us_Page />} />
          <Route exact path="/Blogs" element={<Blogs />} />
          <Route exact path="/Blogs/:topic" element={<Blog />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </Router>
      <ChatBot />
    </>
  );
}

export default App;
