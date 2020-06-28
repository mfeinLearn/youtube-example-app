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
    //changes dont refresh the page it just it just changes
  render() {
    return (
      <form className="sixteen wide column">
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
