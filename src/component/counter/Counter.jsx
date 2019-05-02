import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './counter.css'

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
    }

    increment(inc) {
        console.log(`increament from parent ${inc}`);
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + inc }
            }
         );
    }

    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment}></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment}></CounterButton>
                <span className="count">{this.state.counter} </span>
            </div>
        )
    }
}

class CounterButton extends Component {
    render() {
        //const style = {fontSize:"50 px", padding: "15px 30px"};
        return (
            <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
        )
    }
}

Counter.defaultProps = {
    by: 1
}

Counter.propTypes = {
    by: PropTypes.number
}
export default Counter


