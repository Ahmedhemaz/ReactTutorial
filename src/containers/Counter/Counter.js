import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionsCreator from '../../store/actions/index';
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
        onIncrementCounter: () => dispatch(actionsCreator.incrementCounter()),
        onDecrementCounter: () => dispatch(actionsCreator.decrementCounter()),
        onAddToCounter: () => dispatch(actionsCreator.addToCounter({ value: 5 })),
        onSubtractFromCounter: () => dispatch(actionsCreator.subtractFromCounter({ value: 5 })),
        onStoreResult: (result) => dispatch(actionsCreator.storeResult({ result })),
        onDeleteResult: (id) => dispatch(actionsCreator.deleteResult({ id })),

    }
}

export default connect(mapStoreStateToProps, mapStoreDispatchToProps)(Counter);