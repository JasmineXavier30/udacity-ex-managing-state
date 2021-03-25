import React, {Component} from 'react';

class MathScore extends Component {
  
  render() {
    return (
      <p className="text">
          Your Score: {this.props.numCorrect}/{this.props.numQuestions}
      </p>
    )
  }
}

export default MathScore; 