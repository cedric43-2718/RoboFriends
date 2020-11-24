import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
// import {robots} from './robots';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ComponentErrorBoundary';
import './App.css';
// import { render } from '@testing-library/react';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: '' 
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {return response.json()})
        .then(users => {this.setState({robots: users})});
        
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
       
    }


    render(){
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if(!robots.length){
           return <h1>Loading</h1>
        } else {
        return(
        <div className="tc">
            <h1 className="f2">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                     <CardList robots={filteredRobots}/>
                </ErrorBoundary>
               
            </Scroll>
            
        </div>
        ); 
        }
    }
    
}

export default App;