import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

const genreArr = ['Fantasy', 'Sci-Fi', 'Historical', 'Cyber']
const typeArr = ['Racing', 'Platformer', 'FPS', 'RTS', 'Card-Based', 'Sport', 'Strategy', 'Puzzle', 'RPG']
const wildArr = ['Silly', 'Drama']

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            genre: '???',
            type: '???',
            wild: '???'
        }
        this.shuffleHandler = this.shuffleHandler.bind(this);
    }
    shuffleHandler() {
        for (let i = 0; i < 13; i++) {
            let gIndex = Math.floor(Math.random() * Math.floor(genreArr.length))
            let tIndex = Math.floor(Math.random() * Math.floor(typeArr.length))
            let wIndex = Math.floor(Math.random() * Math.floor(wildArr.length))
            this.setState({
                genre: genreArr[gIndex],
                type: typeArr[tIndex],
                wild: wildArr[wIndex]
            })
        }
    }

    render() {
        return (
            <div id = 'wrapper'>
                <div id = 'idea'>
                { this.state.genre } { this.state.type } { this.state.wild }
                </div>
                <button id = 'randomizer' onClick = { this.shuffleHandler }>Randomize!</button>
            </div>
        )
    }
}

const rootDiv = document.getElementById('root');

ReactDOM.render(<App />, rootDiv)
