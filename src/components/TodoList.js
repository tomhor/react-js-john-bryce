import React from 'react';

import TodoItem from './TodoItem';


export default class TodoList extends React.Component{

    state = {
        data: []
    }

    componentDidMount() {
        fetch('https://nztodo.herokuapp.com/api/task/?format=json')
          .then(response => response.json())
          .then(data => this.setState({ data }));
      }

    render(){
        return(
                <div>
                {
                    this.state.data.map(
                        function(singleItem,count) {
                            return(
                                <TodoItem key ={count} title = {singleItem.title} description = {singleItem.description}/>
                            )
                        }
                    )
                }
                </div>
        )
    }
}