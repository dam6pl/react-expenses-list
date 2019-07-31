/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Input from './Input';

interface IProps {
    name: string,
    label: string,
    type?: string | "text"
}

const Fieldset: React.FC<IProps> = (props) => {
    return (
        <fieldset css={{
            padding: '10px 0'
        }}>
            <label
                css={{
                    fontSize: 18,
                    display: 'inline-block',
                    width: 200
                }}
                htmlFor={props.name}
            >{props.label}</label>
            <Input name={props.name} type={props.type} />
        </fieldset>
    );
}

export default Fieldset;
