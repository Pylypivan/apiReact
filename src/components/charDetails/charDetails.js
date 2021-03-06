import React, {Component} from 'react';
import './charDetails.css';
import gotServices from '../services/gotServices';

export default class CharDetails extends Component {

    gotServices = new gotServices();

    state = {
        char:null
    }

    componentDidMount() {
        this.upDateChare();
    }

    upDateChare() {
        const {charId} = this.props;

        if (!charId) {
            return;
        }

        this.gotServices.getCharacter(charId)
        .then((char) => {
            this.setState(char);
        })
    }

    
      

    render() {
    
        if (!this.state.char) {
        
            return <span className= 'select-error'>Please choose your character</span>
        }

        const {name,gender,born,died,culture} = this.state.char;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">{born}</span>
                        <span>1783</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}