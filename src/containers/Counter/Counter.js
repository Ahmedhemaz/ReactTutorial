import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddToCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractFromCounter} />
                <hr />
                <div>
                    <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                    <ul>
                        {
                            this.props.storedResults.map(storedResult => (
                                <li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>{storedResult.value}</li>
                            ))
                        }
                    </ul>

                </div>
            </div>
        );
    }
}

const mapStoreStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapStoreDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT_COUNTER }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT_COUNTER }),
        onAddToCounter: () => dispatch({ type: actionTypes.ADD_TO_COUNTER, payload: { value: 5 } }),
        onSubtractFromCounter: () => dispatch({ type: actionTypes.SUBTRACT_FROM_COUNTER, payload: { value: 5 } }),
        onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, payload: { result } }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, payload: { id } }),

    }
}

export default connect(mapStoreStateToProps, mapStoreDispatchToProps)(Counter);