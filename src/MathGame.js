import React, {Component} from 'react';
import MathScore from './MathScore';


class MathGame extends Component {
  
  	constructor(props) {
      super(props);
      
      let valArr = this.makeNewQuestion();
      
      this.state = {
        value1 : valArr[0],
        value2 : valArr[1],
        value3 : valArr[2],
        proposedAnswer : valArr[3],
        numCorrect : 0,
        numQuestions : 0
      }
      
      this.validateAnswer = this.validateAnswer.bind(this)
    }
  
  makeNewQuestion = () => {
    	const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
    	const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    
    	return [value1, value2, value3, proposedAnswer];
  }

 	validateAnswer(value) {
    	this.setState( (prevState) => ({
      		numQuestions : prevState.numQuestions+1,
          	numCorrect : ((value === true && ((prevState.value1 + prevState.value2 + prevState.value3) === prevState.proposedAnswer)) || 
          				 (value === false && ((prevState.value1 + prevState.value2 + prevState.value3) !== prevState.proposedAnswer))) ?
          				prevState.numCorrect+1 : prevState.numCorrect 
    	}))
		this.changeStateWithNewQuestion()
  	}

	changeStateWithNewQuestion = () => {
		let valArr = this.makeNewQuestion();
      	this.setState({
          value1 : valArr[0],
          value2 : valArr[1],
          value3 : valArr[2],
          proposedAnswer : valArr[3]
        })
    }
  
  render() {
    return (
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick = {() => this.validateAnswer(true)}>True</button>
          <button onClick = {() => this.validateAnswer(false)}>False</button>
          <MathScore numCorrect = {this.state.numCorrect} numQuestions = {this.state.numQuestions} />
      	</div>
    )
    
  }
}

export default MathGame;