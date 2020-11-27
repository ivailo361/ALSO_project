import styled from 'styled-components';
import { Link } from 'react-router-dom'


const standardView = (theme) => {
    const type = {
        default: `color: black; border-radius: 0.4rem; margin-right: 1rem;`,
        Fujitsu: `color: rgb(226,6,6); border: 2px solid #cccccc; margin-bottom: 1rem;`,
        HPE: `color: rgb(1,169,130); border: 2px solid #cccccc; margin-bottom: 1rem;`,
        DELL: `color: rgb(1,126,186); border: 2px solid #cccccc; margin-bottom: 1rem;`,
        Lenovo: `color: rgb(53,43,114); border: 2px solid #cccccc; margin-bottom: 1rem;`,
    }
    return type[theme] ? type[theme] : type['default']
}

const hoverView = (theme) => {
    const type = {
        default: `color: black; background-color: #cccccc; border-radius: 0.4rem; margin-right: 1rem;`,
        Fujitsu: `color: white; background-color: rgb(226,6,6);`,
        HPE: `color: white; background-color: rgb(1,169,130);`,
        DELL: `color: white; background-color: rgb(1,126,186);`,
        Lenovo: `color: white; background-color: rgb(53,43,114);`,
    }
    return type[theme] ? type[theme] : type['default']
}

const configuratorView = (conf) => {
    if (conf === 'true') {
        return (
            `width: 150px;
            height: 150px;
  
            `
        )
    }
}


const Li = styled.li`
    list-style-type: none;
    text-decoration: none;
`

const StyledLink = styled(Link)`
    &:hover {
        ${({ theme }) => hoverView(theme)}
    }
    display: block;
    text-align-last: center;
    border-radius: 0.3rem;
    background-color: white;
    font-weight: bold;
    box-shadow: inset 0 0 10px #cccccc;
    padding: 0.3rem 0.5rem;
    text-decoration: none;
    height: auto;
    ${({ theme }) => standardView(theme)}

    ${({ conf }) => configuratorView(conf)}
    /* color: black;
    background-color: white;
    border-color: white;
    border-radius: 0.4rem; */
`

export {
    Li,
    StyledLink,
}