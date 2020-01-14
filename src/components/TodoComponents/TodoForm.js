import React from 'react';

class ToDoForm extends React.Component {
    constructor(){
    super();
    this.state = {
        item: ''
    }

    
    
}
    handleChange = e => {
        this.setState({
            item: e.target.value
        })
    }


    handleSubmit = e => {
        e.preventDefault()
        this.props.addTask(this.state.item)
        this.setState({
            item: ''
        })
    }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.item} />

                <button className='addTask' type='submit' >Add Task</button>
            </form>
        )
    }
}
export default ToDoForm;