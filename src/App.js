import React, { Component } from 'react'
import Navbar from './Components/navbar'
import NewsComponent from './Components/NewsComponent'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  state={
    progress:10
  }

  setProgress=(progress)=>{
    this.setState({
      progress: progress
    })
  }

  render() {
    debugger
    return (
      <Router>
      <div >
        <Navbar />
        <LoadingBar
        height= {3}
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Routes><Route key="business" exact path="/business" element={<NewsComponent progress={this.setProgress} category="business" section="Business" />}></Route></Routes>
        <Routes><Route key="entertainment" exact path="/entertainment" element={<NewsComponent progress={this.setProgress} category="entertainment" section="Entertainment" />}></Route></Routes>
        <Routes><Route key="general" exact path="/" element={<NewsComponent progress={this.setProgress} category="general" />}></Route></Routes>
        <Routes><Route key="health" exact path="/health" element={<NewsComponent progress={this.setProgress} category="health" section="Health" />}></Route></Routes>
        <Routes><Route key="science" exact path="/science" element={<NewsComponent progress={this.setProgress} category="science" section="Science" />}></Route></Routes>
        <Routes><Route key="sports" exact path="/sports" element={<NewsComponent progress={this.setProgress} category="sports" section="Sports" />}></Route></Routes>
        <Routes><Route key="technology" exact path="/technology" element={<NewsComponent progress={this.setProgress} category="technology" section="Technology" />}></Route></Routes>
      </div>  </Router>
    )
  }
}

export default App
