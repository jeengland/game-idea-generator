import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

// set up arrays full of parameters for generator 

const settingArr = ['Fantasy','Sci-fi','Historical','Cyber','Space','Pirate','Western','Future','Medieval','Post-Apocalyptic','Magic Realism','Prehistoric']
const typeArr = ['Racing','Platformer','RTS','FPS','Card-Based','Sport','Puzzle','RPG','Stealth','Fighting','Rhythm','Management Sim','Idle ','Mystery','Base Builder','Dating Sim']
const wildArr = ['Silly','Dramatic','Noir','Cliches','Parody','Adult','Not Enough Swords','Mechs','Typing','Point and Click','Cooking','Medical','Stereotypical Culture','Story Driven','Farming','Pointless Game Mechanic','Fishing','Gratuitous Violence','Collectables','Crafting','Free Space','Unreliable Narrator','Grappling Hook','Too Many Stats','Grinding','Alchemy','Heist','Cerebral','Seafaring']

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // initialize state to mystery instead of generating on pageload
            setting: '???',
            type: '???',
            wild: '???'
        }
        this.shuffleHandler = this.shuffleHandler.bind(this);
    }
    // replaces state with a randomly chosen parameter between 0 and array.length
    shuffleHandler() {
        let sIndex = Math.floor(Math.random() * Math.floor(settingArr.length))
        let tIndex = Math.floor(Math.random() * Math.floor(typeArr.length))
        let wIndex = Math.floor(Math.random() * Math.floor(wildArr.length))
        this.setState({
            setting: settingArr[sIndex],
            type: typeArr[tIndex],
            wild: wildArr[wIndex]
        })    
    }

    render() {
        return (
            <div id = 'wrapper'>
                <div id = 'idea'>
                { /* print state with dividers between parameters */ }
                { this.state.setting } ~ { this.state.type } ~ { this.state.wild }
                </div>
                { /* button calls shuffleHandler to change parameters */}
                <button id = 'randomizer' onClick = { this.shuffleHandler }>Randomize!</button>
            </div>
        )
    }
}

const rootDiv = document.getElementById('root');

ReactDOM.render(<App />, rootDiv)
