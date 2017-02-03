import React from 'react'

class DelayedButton extends React.Component {

  constructor(props) { // get props from the render
    super() // pass props to the parent
    this.onDelayedClick = this.onDelayedClick.bind(this) // overriding default behavior
  }

  onDelayedClick(event) {
    event.persist()
    setTimeout(this.props.onDelayedClick, this.props.delay, event)
  }

  render() {
    return (
      <div>
        <button onClick={this.onDelayedClick}>Click meee</button>
      </div>
    )
  }

}


module.exports = DelayedButton
