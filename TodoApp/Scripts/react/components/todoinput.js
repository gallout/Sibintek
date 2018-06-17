import React from 'react';
import './todoinput.css'

export default class TodoInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Form is submitted. Task value is', this.state.value);
    }

    handleChange(e) {
        console.log('Task was changed', e.target.value );
        this.setState({value: e.target.value});
    }

    addTodo(todo) {
        if (todo.length > 0) {
            this.props.addTodo(todo);
            this.setState({ value: '' });
        }
    }

    render() {
        return(
        <div className = "input">
         <div className = "focus">
        <form onSubmit = { this.handleSubmit}>
           
            <input
                type="text"
                placeholder="I want to..."
                value= { this.state.value }
                onChange={this.handleChange}
               
            />
           <button className="button" onClick = {()=> this.addTodo(this.state.value)}>Add</button>
           </form>
    </div>
  
    </div>
        );
    }
}