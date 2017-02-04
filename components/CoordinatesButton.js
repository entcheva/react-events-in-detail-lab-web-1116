import React from 'react'

class CoordinatesButton extends React.Component {

  constructor(props) {
    super()
  }

  render() {
    return (
      <div>
        <button onClick={(event) => {this.props.onReceiveCoordinates([event.clientX, event.clientY])} }>
        </button>
      </div>
    )
  }
}


module.exports = CoordinatesButton
