/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Header from './Header';
import ListForm from './Form/ListForm';
import { Container, Row } from 'reactstrap';

interface IState {
    ratio: number
}

export default class App extends React.Component<{}, IState> {
    public state: IState = {
        ratio: 0.23
    }

    changeRatio = (ratio: number) => {
        this.setState({ ratio: ratio })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Header ratio={this.state.ratio} changeRatio={this.changeRatio} ></Header>
                </Row>
                <Row>
                    <ListForm></ListForm>
                </Row>
            </Container>
        );
    }
}