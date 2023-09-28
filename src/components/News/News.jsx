import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {

  articles = [
    // {
    // "status": "ok",
    // "totalResults": 2,
    // "articles": [
    {
    "source": {
    "id": "espn-cric-info",
    "name": "ESPN Cric Info"
    },
    "author": null,
    "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    "publishedAt": "2020-04-27T11:41:47Z",
    "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
    "source": {
    "id": "espn-cric-info",
    "name": "ESPN Cric Info"
    },
    "author": null,
    "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    "publishedAt": "2020-03-30T15:26:05Z",
    "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
    ]

    static defaultProps = {
      name:"phani",
      country:"in",
      pageSize:3,
      category:"science"
    }

    static propTypes = {
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string
    }

  constructor(){
    
    super();
    console.log("Hello I am a constructor from NewsItem");
    this.state={
      articles : this.articles,
      loading : false,
      page :1
    }
  }

  async componentDidMount(){
    console.log("cdm");
    let url = `https://newsapi.org/v2/everything?q=India+constitution&from=2023-08-22&to=2023-08-22&sortBy=popularity&apiKey=d34d49aff85a475c9d186e22b4fe73b1&page=1&pageSize=${this.props.pageSize}`;
    
   
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults, loading:false})

  }

  handlePrevClick = async ()=>{
    console.log("Previous");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d34d49aff85a475c9d186e22b4fe73b1&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false});

    this.setState({
      page:this.state.page-1,
      articles:parsedData.articles,
      loading:false
    })
  }

  handleNextClick = async ()=>{
    console.log("Next");
    if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d34d49aff85a475c9d186e22b4fe73b1&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false});

    this.setState({
      page:this.state.page+1,
      articles:parsedData.articles,
      loading:false
    })
  }
  }

  render() {
    return (
      
      <div className="my-3 ">
        <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Read all the current affairs and recent happenings on law."/>
        <link rel="canonical" href="/contact" />


        <meta  
        name ="keywords"
        content="Power of analytics in lawyer apps"
        
        /><meta  
        name ="keywords"
        content="How to choose the right litigation"
        
        />

<meta  
        name ="keywords"
        content="Find lawyers for my case"
        
        /><meta  
        name ="keywords"
        content="Family lawyer consultation"
        
        /><meta  
        name ="keywords"
        content="Personal injury lawyer consultation"
        
        /><meta  
        name ="keywords"
        content="Employment law lawyer"
        
        /><meta  
        name ="keywords"
        content="File my case"
        
        /><meta  
        name ="keywords"
        content="How to file a case"
        
        /><meta  
        name ="keywords"
        content="Law consultation"
        
        /><meta  
        name ="keywords"
        content="Legal services online"
        
        /><meta  
        name ="keywords"
        content=""
        
        />
        
        <meta  
        name ="keywords"
        content="Intellectual property lawyer consultation"
        
        />
        
        <meta  
        name ="keywords"
        content="Legal services online"
        
        />
<meta  
        name ="keywords"
        content="Experienced lawyers online"
        
        />
<meta  
        name ="keywords"
        content="Civil case consultation "
        
        />
<meta  
        name ="keywords"
        content="Legal procedure consultation"
        
        />
<meta  
        name ="keywords"
        content="Business lawyer consultation"
        
        />
<meta  
        name ="keywords"
        content="Lawyer near me"
        
        />

<meta  
        name ="keywords"
        content="Family lawyers near me"
        
        />
        <meta  
        name ="keywords"
        content="Law consultations near me"
        
        />
        <meta  
        name ="keywords"
        content="Affordable Law consultation"
        
        />
        <meta  
        name ="keywords"
        content="Legal professionals community online"
        
        />
        <meta  
        name ="keywords"
        content="Websites for lawyers"
        
        />
        <meta  
        name ="keywords"
        content="Online Community for lawyers"
        
        />
        <meta  
        name ="keywords"
        content="EXECELLENCE"
        
        />
        
         <meta  
        name ="keywords"
        content="EXPERIENCE"
        
        /> 
        
        
        <meta  
        name ="keywords"
        content="INTEGRITY"
        
        />

<meta  
        name ="keywords"
        content="Latest news on law"
        
        />

<meta  
        name ="keywords"
        content="Law news"
        
        />
        <meta  
        name ="keywords"
        content="Legal system today"
        
        />
        <meta  
        name ="keywords"
        content="Updates on criminal cases"
        
        />
        <meta  
        name ="keywords"
        content="Updates on civil cases"
        
        />
        <meta  
        name ="keywords"
        content="Updates on personal injury cases"
        
        /><meta  
        name ="keywords"
        content="Updates on cases"
        
        /><meta  
        name ="keywords"
        content="Trending news on law"
        
        /><meta  
        name ="keywords"
        content="Updates on employment law cases"
        
        /><meta  
        name ="keywords"
        content="Lawyers interviews on cases"
        
        />
      </Helmet>
        {this.state.loading && <Spinner/>}
        <div className="flex row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="flex col justify-evenly flex-wrap" key = {element.url} >
          <NewsItem class= "justify-around" title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://i.ytimg.com/vi/6xx6UYhJw-E/maxresdefault.jpg"} newsUrl={element.url?element.url:"https://www.youtube.com/watch?v=6xx6UYhJw-E"}/>
          </div>
        })}
        
        </div>
        <div className="pb-10 flex justify-around">
        <button disabled={this.state.page<=1} type="button" class="gap-x-8 btn-dark px-2 text-blue-700 py-2 font-bold rounded-lg border-4 border-indigo-500/75 justify-center" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled = {this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class=" gap-x-8 font-bold btn-dark px-4 py-2 text-blue-700 rounded-lg border-4 border-indigo-500/75 justify-items-stretch ml-32" onClick={this.handleNextClick}>Next &rarr;</button>

        {/* <button disabled={this.state.page<=1} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded onClick={this.handleNextClick}">Next &rarr;</button> */}
        </div>
      </div>
    )
  }
}
