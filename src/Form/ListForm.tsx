/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Fieldset from './Fieldset';

export default class ListForm extends React.Component {
    render() {
        return (
            <div
                css={{
                    border: '1px solid gray',
                    borderRadius: 10,
                    background: '#f7f7f7',
                    padding: '15px 20px'
                }}
            >
                <form>
                    <Fieldset name="title" label="Title of transaction" />
                    <Fieldset name="amount" label="Amount (in PLN)" type="number" />
                    <div
                        css={{
                            textAlign: 'right'
                        }}
                    >
                        <button
                            type="submit"
                            css={{
                                padding: '5px 40px',
                                fontSize: 16,
                                background: '#64d211',
                                color: '#383838',
                                borderColor: '#2ca52c',
                                borderRadius: 5
                            }}
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}