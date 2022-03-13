import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchText: '', textCount: 0}

  onTyping = event => {
    this.setState({
      searchText: event.target.value,
      textCount: event.target.value.length,
    })
  }

  render() {
    const {searchText, textCount} = this.state
    return (
      <div className="outerContainer">
        <div className="ContentContainer">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="imagecss"
            />
          </div>
          <div className="contentsContainer">
            <h1 className="heading">Calculate the Letters you Enter</h1>
            <div className="inputContainer">
              <label className="labelling" htmlFor="inputting">
                Enter the phrase
              </label>
              <input
                type="text"
                name="Enter the phrase"
                className="inputEl"
                id="inputting"
                placeholder="Enter the phrase"
                onChange={this.onTyping}
                value={searchText}
              />
            </div>
            <p className="buttons">No.of letters: {textCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
