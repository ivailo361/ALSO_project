import React, { Fragment, useState } from 'react'
import db from '../../storage/database'
import { putComponentData } from '../../models/fetcher'
import useNotifications from '../../models/notification'
import styled from 'styled-components'

import { ErrorMsg, NotificationMsg } from '../../mainComponents/messenger/message'

function PartDetails(props) {
    const { part } = props
    const [inputs, setInputs] = useState({ ...part });
    const { error, notify, notifyMessage, errorMessage, closeMessage } = useNotifications()
    
    const types = db.getTypesComponents()
    const models = db.getModels(part.manufacturer)
    const serverModels = models.slice(0, models.length - 1)


    let selectTypes = types.map(x => {
        return (
            <option key={x._id} value={x.type}>{x.type}</option>
        )
    })

    let listModels = serverModels.map((x, i) => {
        return (
            <option key={i} value={x}>{x}</option>
        )
    })

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value })); 
    }

    const handleSelectModels = (event) => {
        const target = event.target
        const name = target.name
        const value = Array.from(target.selectedOptions, option => option.value);
        setInputs(inputs => ({ ...inputs, [name]: value }));
        // setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
            putComponentData('/api/edit/component', inputs)
                .then(res => {
                    if (res >= 1) {
                        db.updateComponent(inputs)
                    }
                    notifyMessage(`modified component: ${res}\n`)
                })
                .catch(e => {
                    console.log(e)
                    errorMessage(e.message)
                })
        }
    }

    return (
        <Fragment>
            {error ? <ErrorMsg message={error} closeMessage={closeMessage} /> : null}
            {notify ? <NotificationMsg message={notify} link={part.manufacturer} closeMessage={closeMessage} /> : null}
            <h1>Edit the chosen component</h1>
            <form onSubmit={handleSubmit}>
                <p>-------------------------</p>
                {part.type !== 'Server'
                    ? <div>
                        <label>Pick ut the compatible servers:  </label>
                        <div>Multiple selections are possible  </div>
                        <Select multiple={true} size={serverModels.length} name='compatibleSrv' value={inputs.compatibleSrv} onChange={handleSelectModels}>
                            {listModels}
                        </Select>
                    </div>
                    : null
                }
                <div>
                    <label>Pick your the correct type:  </label>
                    <Select name='type' value={inputs.type || 'undefined'} onChange={handleInputChange}>
                        {selectTypes}
                    </Select>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </Fragment>
    )
}

export default PartDetails

            /*
            <Switch>
                <Route path={`${path}/:manufacturer`} render={({ match }) => {
                    return (<Redirect to={`/stock/${match.params.manufacturer}`} />)
                }} />
            </Switch>
            */

const Select = styled.select`
    width: auto;
    display: block;
    border: 1px solid #ccc;
    /* box-sizing: border-box;
    padding: 12px 20px 12px 12px;
    border-radius: 0 4px 4px 4px; */
    margin: 8px 0 2em;
`

