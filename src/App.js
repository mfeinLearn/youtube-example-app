import React, { Component } from 'react';
import VideoList from './VideoList'
import Searchbar from './SearchBar'
import ViewerContainer from './ViewerContainer'
// import dummyData from './dummyData'
import keys from './Keys';

class App extends Component {
    constructor() {
        super()
        this.state = {
            selectedVideo: null, // {} or null
            videos: []
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
    }

    componentDidMount() {
        const searchTerm = 'cockatiels'
        this.makeSearch(searchTerm)
    }

    makeSearch(searchTerm) {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${searchTerm}&type=video`
        fetch(url).then(r => r.json()).then(res => this.setState({videos: res.items, selectedVideo: res.items[0]}))
    }

    // The handler is saying that I am going to pass this to something that is onSubmit
    submitHandler(searchTerm) {
        this.makeSearch(searchTerm)
    }


    // what is our click handler changing? state
    // which piece of state? selectedVideo
    // When we click on a videolistitem we want to change
    //.. the selectedVideo which lives in app so we need to define clickHandler
    //.. in app. Because it is also going to change what is in our ViewerContainer
    //.. so in order to click on a video list item and for it to show up here
    //.. it needs to go through app.
    // Any time you have a piece of state you need to know who is that state is going to be changed
    clickHandler(videoObj) {
        this.setState({selectedVideo: videoObj })
    }

  render() {
      console.log(this.state)// everytime it rerenders we can see the state
    return (
      <div className="ui grid container">
        {/* What goes here? */}
        <Searchbar submitHandler={this.submitHandler}/>
        <ViewerContainer selectedVideo={this.state.selectedVideo}/>
        <VideoList clickHandler={this.clickHandler} videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
///////////////////////////////////////////////////
///////////////////////////////////////////////////
// result of console log what method gets called first test:
//1. in constructor - we have a constructor we have to make the object before we can do any of these methods
//2. in render - then it renders (their is a reason why it is called componentDidMount rather then componentWillMount)
//.. your component is already rendered it is already mounted on your dom.
//3. in componentDidMount
//4. render - then when the component gets that response it triggers a rerender. Any time you call setState in a component it will trigger a rerender and any children that are dependent on anyhting that changed will also rerender

// That is why you will often see two things right after you have a componentDidMount because componentDidMount does something and then triggers a rerender with the new data
