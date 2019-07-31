/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Input from './Form/Input';
import ReactTooltip from 'react-tooltip'
import { Container, Row, Col } from 'reactstrap';

interface IProps {
    ratio: number,
    changeRatio: (e: number) => void
}

interface IState {
    edit: boolean,
    errorMessage?: string
}

export default class Header extends React.Component<IProps, IState> {
    public state: IState = {
        edit: false
    }

    changeRatio(e: any) {
        // e.preventDefault();

        // console.log(e);
        // if (e.target.value <= 0) {
        //     this.setState({ errorMessage: "Exchange ratio should be greater than 0!" });
        //     ReactTooltip.show(e.target);
        //     return;
        // }

        // this.props.changeRatio(e.target.value);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="6">
                        <h1 css={{
                            float: 'left',
                            margin: 0,
                            fontSize: 32,
                            fontWeight: 'bold'
                        }}>
                            List of expenses
                        </h1>
                    </Col>
                    <Col
                        xs="6"
                    >
                        {!this.state.edit ?
                            (
                                <span>
                                    1 EUR = {(1 / this.props.ratio).toFixed(2)} PLN
                            <button
                                        css={{
                                            marginLeft: 10
                                        }}
                                        onClick={() => this.setState({ edit: true })}>Edit</button>
                                </span>
                            ) : (
                                <span>
                                    Exchange ratio:
                                <form onSubmit={(e) => this.changeRatio(e)}>
                                        <Input
                                            name="ratio"
                                            type="number"
                                            defaultValue={String(this.props.ratio)}
                                            css={{
                                                width: 100
                                            }}
                                            data-tip={this.state.errorMessage}
                                        />
                                        <button type="submit">Save</button>
                                    </form>
                                </span>
                            )
                        }
                        {/* <ReactTooltip place="bottom" /> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}