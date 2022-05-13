import React from 'react';
import { Btn, BtnBorder } from './Button.elements';

const Button = (props) => {
    return (
        <>
        <Btn>
            <BtnBorder>
        {props.children}
            </BtnBorder>
        </Btn>
        </>
    );
};


export default Button;