import React, { Component } from 'react';
import './App.css';

//import components
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import BlogList from './components/BlogList'



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      blogs: [
        {title: "First post",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea repellat blanditiis aliquid deleniti maiores et rerum voluptas atque, illo repudiandae molestiae dignissimos obcaecati velit voluptates quaerat in nam id illum."
         },
         {title: "Second post",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea repellat blanditiis aliquid deleniti maiores et rerum voluptas atque, illo repudiandae molestiae dignissimos obcaecati velit voluptates quaerat in nam id illum."
         },
         {title: "Third post",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea repellat blanditiis aliquid deleniti maiores et rerum voluptas atque, illo repudiandae molestiae dignissimos obcaecati velit voluptates quaerat in nam id illum."
         },
         {title: "Fourth post",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea repellat blanditiis aliquid deleniti maiores et rerum voluptas atque, illo repudiandae molestiae dignissimos obcaecati velit voluptates quaerat in nam id illum."
         },
         {title: "Fifth post",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea repellat blanditiis aliquid deleniti maiores et rerum voluptas atque, illo repudiandae molestiae dignissimos obcaecati velit voluptates quaerat in nam id illum."
         }
      ],
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <div className="main-content">
          <BlogList blog={this.state.blogs} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
