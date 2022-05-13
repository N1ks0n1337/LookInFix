import React from 'react';
import { Btn, BtnBorder } from './ButtonFooter.elements';

const ButtonFooter = (props) => {
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


export default ButtonFooter;