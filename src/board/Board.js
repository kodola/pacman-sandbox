import React, { Component } from 'react';

import Pacman from '../pacman';
import Ghost from '../ghost';
import Food from '../food';

import './style.css';

class Board extends Component {

  constructor(props) {
    super(props);
    this.pacmanRef = React.createRef();

    this.foods = [];
    this.amountOfFood = (
      (window.innerWidth - this.props.border - this.props.foodSize)
        * (window.innerHeight - this.props.border - this.props.topScoreBoard)
    ) / (this.props.foodSize * this.props.foodSize);
    for (let i = 0; i < this.amountOfFood; i++) {
      this['food' + i] = React.createRef();
    }
  }

  componentDidMount() {
    // TODO: uncomment me when necessary
    this.intervalFood = setInterval(this.lookForEat, 100);
  }

  lookForEat = () => {
    const pacmanX = this.pacmanRef.current.state.position.left;
  const pacmanY = this.pacmanRef.current.state.position.top;
  const pacmanSize = this.pacmanRef.current.props.size

  const pacmanLastX = pacmanX + pacmanSize / 2;
  const pacmanLastY = pacmanY + pacmanSize / 2;

    // TODO: implement food eating
  }

  render() {
    let foods = [];
    let currentTop = 0;
    let currentLeft = 0;

    for (let i = 0; i < this.amountOfFood; i++){
      if (currentLeft + this.props.foodSize
          >= window.innerWidth - this.props.border){
        currentTop += this.props.foodSize
        currentLeft = 0;
      }
      if (currentTop + this.props.foodSize
          >= (window.innerHeight
              - this.props.border
              - this.props.topScoreBoard)) {
        break;
      }
      const position = { left: currentLeft, top: currentTop};
      currentLeft = currentLeft + this.props.foodSize;
      foods.push(<Food ref={this['food' + i]} position={position} key={i}/>
    );
    }


    // TODO: implement food rendering

    return (
      <div className="board">
          {foods}
          <Pacman ref={this.pacmanRef} />
          <Ghost color="blue"/>
          <Ghost color="pink"/>
      </div>
    )
  }
}

Board.defaultProps = {
	foodSize: 50,
	border: 20,
	topScoreBoard: 100
};

export default Board;