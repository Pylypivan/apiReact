import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import RandomChar from '../randomChar';
import ItemList from '../itemList';

import './app.css';


export default class App extends Component {

    state = {
        showRandomChar: true,
        error: false,
        celectedChar: null
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        }) 
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        const char = this.state.showRandomChar ? <RandomChar/> : null;

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <button 
                                className="toggle-btn"
                                onClick={this.toggleRandomChar}>Toggle random character</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList  onCharSelected = {this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId = {this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};