// import logo from './logo.svg';
// import './App.css';
import { Component } from 'react';
// import React, {Component, useState} from 'react'
// import { BrowserRouter, Route } from 'react-router-dom';
// import React, {useState} from "react";
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../actions';


// const App = () => {
//   const [value, setTodos] = useState('');
//   const [todoList,setTodoList] = useState([])
  // };

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      todos:''
    }
  }


Change=(e)=>{
  console.log(e);
  this.setState({todos:e.target.value})
}


  add(todos){
    this.props.addTodo(todos)
    this.setState({todos:''})
  }

  delete(index){
    this.props.delete(index)
  }
  
  // deleteTodo(i){
  //   this.setState({todoList[i]})
  // }

  render() {
    // const TodoList=this.props.todoList.map((todoname,index)=>{
    //   return <li key={index}>{todoname.todos} <button onClick={this.delete(index)}>削除</button></li>
    // })
    return (
      <div>
        <h1>TODO App</h1>
          <input type="text" value={this.state.todos} onChange={this.Change}/>
        {/* <p>{this.state.value}</p> */}
          <button onClick={()=>this.add(this.state.todos)}>追加</button>
            {this.props.todoList.map((todoname,index)=>{
              return <li key={index}>{todoname}<button onClick={()=>this.delete(index)}>削除</button></li>
            })}
          
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoList: state.Todo.todoList,
    
  
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todos) => dispatch(addTodo(todos)),
    delete: (index) => dispatch(deleteTodo(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)



// const App =()=>{
//   const[todos,setTodos]=useState('');
//   const todoElement = e => setTodos(e.target.value);
//   return(
//     <div>
//     <input value={this.state.value} placeholder='タイトルを入力してください' todoState=></input>
//     <button onClick={(setTodos(todos.concat({title:titleElement.value})))}>追加</button>
//     </div>
//   )
// }

// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state={count:0}
//   }
  // render(){
  //   return(
  //     <div>
  //     <p>現在の数字は{this.state.count}です</p>
  //     <button onClick={()=>this.setState({count:this.state.count+1})}>+1</button>
  //     <button onClick={()=>this.setState({count:0})}>0</button>
  //     </div>
  //   )
  //   }
    // let isMorning=true
    // return(
    //   <div>
    //     {/* {isMorning&&<span>goodmorning</span>}
    //     {!isMorning&&<span>hello</span>} */}
        
    //     三項演算子使用
    //     {isMorning?<span>goodmorning</span>:<span>hello</span>}
    //   </div>
    // )
    // function greeting(){
    //   if(isMorning){
    //     return <span>goodmorning</span>
    //   }else{
    //     return <span>hello</span>
    //   }
    // }
    // return(
    //   <div>
    //     {greeting()}
    //   </div> 
    // )
    // const App = () =>{
    //   return (
    //     <div>
    //     <Menber name={'taro'} age={28}/>
    //     </div> 
    //   )
    // }
    // const Menber = (props) => {
    //   return <div>im {props.name} age {props.age}</div>
    // }

  // }


// export default App;
