import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todo-list';
import './app.css';
import TodoInput from './components/todoinput'


class TodoApp extends Component {

    constructor (props) {
        super(props);

        this.state = {
            todos: [
                {
                    id: 0,
                    title: 'Complete task1',
                    complete: true
                },
                {
                    id: 1,
                    title: 'Switch to task2',
                    complete: false
                },
                {
                    id: 2,
                    title: 'Start task3',
                    complete: false
                },
            ],
            nextId: 3
        }
        this.addTodo = this.addTodo.bind(this);

    }

    /// <summary>
    /// Метод добавления отметки о завершении задачи
    /// </summary>

    toggleTodo(id) {
        const todos = this.state.todos;
        let complete = todos[id].complete;
        todos[id].complete = !complete;
        this.setState({ todos });
    }

    /// <summary>
    /// Метод добавления задачи
    /// </summary>

    addTodo(todoText) {
        let todos = this.state.todos.slice();
        todos.push({ id: this.state.nextId, title: todoText, complete: false });
        this.setState({
                todos: todos,
                nextId: ++ this.state.nextId
        });
}

  

    render(){
        return(
            <div className="app">
            <div className="todo-wrapper">
           
           
            <TodoInput todoText = "" addTodo= {this.addTodo} />
            <ol>
            <br></br>
                {this.state.todos.map((todo, id) => {
                    const className = todo.complete ? 'complete' : '';
                    return <TodoList key= {id} 
                                     title={todo.title} 
                                     className={className} 
                                     toggleTodo={this.toggleTodo.bind(this, id)}
                                     />
                     })
                }
            </ol>
  
             </div>
            </div>
        );
      }
    }

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('root')
    );

export default App;