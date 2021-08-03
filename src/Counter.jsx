import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Counter extends Component {


    increment = () => {
        this.props.dispatch({type: 'INCREMENT'})
    }

    decrement = () => {
        this.props.dispatch({type: 'DECREMENT'})
    }
    render() {
        return (
            <div>
                <h3>Counter</h3>
                <button onClick={this.increment}>+</button>
                <label>{this.props.count}</label>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    count: state.count
  })
  
  export default connect(mapStateToProps)(Counter);
