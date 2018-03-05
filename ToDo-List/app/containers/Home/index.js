/*
*
* Home
*
*/

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      listItems:[""],
      inputItem:""
    };
  }

  handleItem = (event) => {
    this.setState({
      inputItem:event.target.value
    })
  }

  storeItem = () => {
    var listItems = this.state.listItems;
    var inputItem = this.state.inputItem;

    if(inputItem!== "") {
      listItems.push(inputItem);
      this.setState({
        listItems:listItems,
        inputItem:""
      })
    }
  }

  getTasks = () => {
    fetch("http://127.0.0.1:8000/api/getTasks", {
      method:'GET'
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
      this.setState({
        listItems:json.tasks
      })
    }.bind(this))
  };

storeTask = () => {
  let data = new FormData();
  data.append('taskContent', this.state.inputItem);

  fetch("http://127.0.0.1:8000/api/storeTask", {
    method:'POST',
    body:data})
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    let listItems = this.state.listItems;
    listItems.push(json.task);
    this.setState({
      listItems:listItems
    })
    this.forceUpdate();
  }.bind(this))
}

componentWillMount(){
this.getTasks();
}

  render() {
    return (
      <div className="container">
        <Helmet title="Lab 4 To-Do List" meta={[ { name: "description",
          content: "Lab4 of the Clubhou.se's Code Boot Camp 3" }]}/>
          <div className="inputContainer">
            <input type="text"
              className="todoInput"
              onChange={this.handleItem}
              value={this.state.inputItem} />
              <input type="submit"
                className="todoButton"
                onClick={this.storeTask}
                value="Add this ToDo, to your list."/>
              </div>
              <div className="todoList">
                {this.state.listItems.map((item, index) => (
                  <div className="listItem"
                    key={`listItem${index}`}
                    onClick={this.strikeThrough}>
                    {item.taskContent}
                  </div>
                ))}
              </div>
            </div>
          );
        }
      }
