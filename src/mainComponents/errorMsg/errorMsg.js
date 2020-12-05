import React from 'react'
import styled from 'styled-components'



function ErrorMsg(props) {
    return (
        <Message>
            <Div>{props.message}</Div>
            <Button type='button' onClick={() => props.closeMessage("")}>X</Button>
        </Message>
    )
}

const Div = styled.div`
    width: 80%;
    margin-right: auto;
`

const Button = styled.button`
    &:hover {
        background-color: #FF6666
    }
    &:active {
        box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 40),
                inset 2px 2px 3px rgba(0, 0, 0, .6);
    }
    display: block;
    background-color: inherit;
    border: 0;
    color: white;
    font-size: larger;
    padding: 0 .3rem;
    outline: none;

`

const Message = styled.div`
    position: absolute;
    display: flex;
    align-items: flex-start;
    color: white;
    font-size: larger;
    background-color: #EC6A6A;
    border-radius: 0.3rem;
    width: auto;
    padding: .3rem;
    right: 1%;
    /* margin: .5rem auto; */
    /* margin-left: 50%; */
    /* transform: translateX(-50%); */
`

export default ErrorMsg