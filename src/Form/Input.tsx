/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';

interface IProps {
    name: string,
    type?: string | "text",
    ref?: string,
    value?: any,
    defaultValue?: string,
    onChange?: (e: any) => void
}

const Input: React.FC<IProps> = (props) => {
    return (
        <input
            {...props}
            css={{
                width: 250,
                fontSize: 16
            }}
        />
    );
}

export default Input;