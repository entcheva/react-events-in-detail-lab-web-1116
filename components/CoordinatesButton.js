import React from 'react'

class CoordinatesButton extends React.Component {

  constructor(props) {
    super()
  }

  onReceiveCoordinates() {

  }

  render() {
    return (
      <div>
        <button onCLick={(event) => {this.props.onReceiveCoordinates([event.clientX, event.clientY])} }>
        </button>
      </div>
    )
  }
}


module.exports = CoordinatesButton
