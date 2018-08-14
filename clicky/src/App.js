import React, { Component } from 'react';
import './App.css';
import ponies from './ponies.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import PonyCard from './components/PonyCard'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        ponies: ponies,
        unselectedPonies: ponies
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectPony = type => {
        const findPony = this.state.unselectedPonies.find(item => item.type === type);

        if(findPony === undefined) {
            // failure to select a new pony
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                ponies: ponies,
                unselectedPonies: ponies
            });
        }
        else {
            // success to select a new pony
            const newPonies = this.state.unselectedPonies.filter(item => item.type !== type);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                ponies: ponies,
                unselectedPonies: newPonies
            });
        }

        this.shuffleArray(ponies);
    };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.ponies.map(pony => (
                        <PonyCard
                            type={pony.type}
                            image={pony.image}
                            selectPony={this.selectPony} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;

