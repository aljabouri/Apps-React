import React, { Component } from 'react';
import './AddItem.css'

class AddItem extends Component {
    state = {
        name : '',
        age : ''
    }

    handleChange = (e) => {
           this.setState({
               [e.target.id]: e.target.value
           })
         }

    handleSubmit = (e) => {
             e.preventDefault();
             this.props.addItem(this.state)
             this.state({
                 name: '',
                 age: ''
             })
         }

  render() {
    return (
      <div>
        <from onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Enter name..." id="name" onChange={this.handleChange} value={this.state.name} />
            <input type="number" placeholder="Enter age..." id="age" onChange={this.handleChange} value={this.state.age} />
            <input type="submit" value="Add" />
        </from>
      </div>
    );
  }
}

export default AddItem;