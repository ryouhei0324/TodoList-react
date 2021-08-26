// import './App.css';
import  { Component } from 'react';
import { connect } from 'react-redux';
import { countPlus, countMinus } from '../actions';


class App extends Component{
    render(){
        const props=this.props
        return(
        <div>
        <p>現在の数字は{props.val}です</p>
        <button onClick={props.countPlus}>+1</button>
        <button onClick={props.countMinus}>-1</button>
        </div>
        )
    }
}

const mapStateToProps = state =>({
    val: state.counter.val
})

const mapDispatchToProps = dispatch =>({
    countPLUS:()=>dispatch(countPlus()),
    countMINUS:()=>dispatch(countMinus())
})

export default connect (mapStateToProps,mapDispatchToProps)(App)