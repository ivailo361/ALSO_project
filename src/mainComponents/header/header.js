import React from 'react'
import { Link } from 'react-router-dom'
import ListItems from '../listItems/listItems'

const headerList = (loggedIn) => {
    const guest = [
        { name: 'Stock', url: '/stock' },
        { name: 'Configurator', url: '/configurator' },
        { name: 'Register', url: '/register'},
        { name: 'Login', url: '/login'},
      ]

      const user = [
        { name: 'Stock', url: '/stock' },
        { name: 'Configurator', url: '/configurator' },
        { name: 'Add category', url: '/addCategory'},
        { name: 'Edit material', url: '/editMaterial'},
        { name: 'Logout', url: '/logout'}
    ]

    return loggedIn ? user : guest
}

function Header() {

        return (
            <div >
                <Link to='/'>
                    <img src="ALSO-Holding-AG.png" /*width="80" height="80" style={{ color: "black", filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(360deg) brightness(102%) contrast(102%)" }} */alt=""></img>
                </Link>
                <nav >
                    <ListItems nav={headerList()} />
                </nav>
            </div>
        )
    }

export default Header