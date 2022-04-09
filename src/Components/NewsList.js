import React from 'react'
import  img from '../noImage.jpg'

function NewsList(props){
    
        let {title,desc,imgUrl,newsUrl,published,Source,author}= props;

        return (
            

                <div className="card" style={{ width: "18rem" }}>
                    <img src={imgUrl?imgUrl:img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text text-muted" style={{fontSize: "small"}}>{new Date(published).toGMTString()}</p>
                        <p className="card-text">{desc}</p>
                        <footer className="blockquote-footer">{author}  <cite title="Source">{Source}</cite></footer>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>

           

            
        )
    }


export default NewsList
