import React from 'react'

class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {
            searchTerm: ''
        }
    }
    onChange = (evt) => {
        this.setState({ searchTerm: evt.target.value })
    }

    submit = () => this.props.submitHandler(this.state.searchTerm)

    //changes dont refresh the page it just it just changes
  render() {
    return (
      // alternative way ->  <form onSubmit={() => this.props.submitHandler(this.state.searchTerm)} className="sixteen wide column">
      <form onSubmit={this.submit} className="sixteen wide column">
        <div className="ui segment secondary">
          <div className="ui huge fluid input">
            <input onChange={this.onChange} type="text" name="searchTerm" value={this.state.searchTerm} placeholder="Search Youtube..."/>
            <button className="ui button" type="submit">Search</button>
          </div>
        </div>
      </form>
    )
  }
}

export default SearchBar
// Q: why cant we put the onChange on the form?
// A: event.target is the tag that the change handler is on.
// So if we put it on the input:
//.. it is evt.target.value.
// If we put it on the form we would need to figure out which node change and update its value accordingly
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Q: What do we want to have happen when we submit? Where should our submit handler live?
//  We need to be able to change state in App so this is where our handler needs to live
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Q: About submitHandler?
// Right now as soon as this VVV renders it is going to call submitHandler with our searchTerm which at
//.. the time would be an empty string and it will never run again!!
// <form onSubmit={this.props.submitHandler(this.state.searchTerm)} className="sixteen wide column">
//.. Anytime you want to write something that will be run later for you but not with the event you need to write an
// anonymous FUNCTION:
// () => this.props.submitHandler(this.state.searchTerm).
//This uses the closer.
// The fact that you have access in this function to this.state.searchTerm to run it later.
// On submit you want this to happen but you dont want it to happen when the component renders. You want it to
// happen when a component is submitted.
