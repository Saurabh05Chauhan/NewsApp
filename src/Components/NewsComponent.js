import React, { useState,useEffect } from 'react'
import NewsList from './NewsList'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const NewsComponent =(props)=> {

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [pageSize, setPageSize] = useState(8)
    const [totalResult, setTotalResult] = useState(0)
   // document.title = this.props.section + " - News Club";
    
    

    

    const  update = async()=>{
        props.progress(10);
        setLoading(true)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=5235e6a61914471996220b88a6ab5ead&page=${page}&pageSize=${pageSize}`;
        props.progress(40);
        let data = await fetch(url);
        props.progress(60);
        let parsedData = await data.json()
        props.progress(100);
        setArticles(parsedData.articles);
        setLoading(false);
        setTotalResult(parsedData.totalResults);

    }

    useEffect(() => {
        update();
    }, [])


    const fetchMoreData = async () => {
       // this.setState({ loading:true ,page: this.state.page + 1 })
        setLoading(true)
        setPage(page+1)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=5235e6a61914471996220b88a6ab5ead&page=${page}&pageSize=${pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles));
        setLoading(false);
        setTotalResult(parsedData.totalResults);


        // this.setState({
        //     articles: this.state.articles.concat(parsedData.articles), loading:false,totalResult: parsedData.totalResults
        // })
    };

   

        return (
            <>
            <div className="container my-3 mx-3">
                <h1>Top News Headlines</h1>
                <h4>  {props.section}</h4>
            </div>
          
                <InfiniteScroll style={{overflow:"hidden"}}
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResult}
                    loader={loading && <Spinner />}
                >
                    <div className="container  my-3 mx-3">
                        <div className="row">
                            {articles.map((element) => {

                                return <div className="col md-4" key={element.url}>
                                    <NewsList title={element.title} desc={element.description} imgUrl={element.urlToImage} newsUrl={element.url} published={element.publishedAt} Source={element.source.name} author={element.author} />
                                </div>

                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page > 1 ? false : true} onClick={this.onPrevClick} className="btn btn-sm btn-dark">Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.state.pageSize) ? true : false} onClick={this.onNextClick} className="btn btn-sm btn-dark">Next</button>
                </div> */}


            </>
        )
  
}

NewsComponent.defaultProps = {

    category: "general",
    section: "General"

}

NewsComponent.propTypes = {

    category: PropTypes.string,
    section: PropTypes.string

}

export default NewsComponent
