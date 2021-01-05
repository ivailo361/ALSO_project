import React, { Fragment, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { deleteData, putComponentData } from '../../models/fetcher'
import useNotifications from '../../models/notification'
import { ErrorMsg, NotificationMsg } from '../../mainComponents/messenger/message'
import db from '../../storage/database'
import { getData } from '../../models/fetcher'



function ModifyType() {
    const location = useLocation()
    const currentTypes = db.getTypesComponents()
    const [typesList, setTypesList] = useState(currentTypes)
    const [trigger, setTrigger] = useState(false)
    const [serversList, setServersList] = useState([])
    const [selectTypes, setSelectTypes] = useState([])

    // const [input, setInput] = useState({})
    // const [newType, setNewType] = useState('')
    const [ inputs, setInputs] = useState({});
    const { error, notify, notifyMessage, errorMessage, closeMessage } = useNotifications()

    useEffect(() => {
        let types = typesList.map(x => {
            return (
                <option key={x._id} value={x._id}>{x.type}</option>
            )
        })
        setSelectTypes(types)

    }, [typesList])

    useEffect(() => {
        getData('/api/stock')
        .then(res => {
            console.log(res)
            setTypesList(res[1])
            db.setTypesComponents(res[1])
            setServersList(res[0])
        })
    }, [trigger])

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value })); 
    }

    const handleAddType = (event) => {
        event.preventDefault();
        putComponentData('/api/edit/types', inputs)
            .then(res => {
                if (res.insertedCount >= 1) {
                    setTrigger(state => !state)
                    notifyMessage(`Type ${res.ops[0].type} was successfully added`)
                } else {
                    errorMessage('Something went wrong please try again later')
                }
                setInputs({})
            })
            .catch(e => {
                errorMessage(e.message)
            })
    }
   

    const handleDelete = (event) => {
        event.preventDefault();
        console.log(inputs)
        deleteData('/api/edit/types', inputs) 
            .then(res => {
                if(res.deletedCount >= 1) {
                    setTrigger(state => !state)
                    notifyMessage(`The type was successfully deleted`)
                } else {
                    errorMessage('Something went wrong please try again later')
                }
            })
            .catch(e => {
                errorMessage(e.message)
            })
    }


    return (
        <Fragment>
            {error ? <ErrorMsg message={error} closeMessage={closeMessage} /> : null}
            {notify ? <NotificationMsg message={notify} closeMessage={() => closeMessage('notify', location)} /> : null}
            <form onSubmit={handleAddType}>
                <div>
                    <label>Add new type</label>
                    <input name='type' type='text' value={inputs.type || ''} onChange={handleInputChange}></input>
                </div>
                <input type="submit" value="Add" />
            </form>

            <form onSubmit={handleDelete}>
                <div>
                    <label>Danger Zone  </label>
                    <select name='id' value={inputs.id} onChange={handleInputChange}>
                        {selectTypes}
                    </select>
                </div>
                <input type="submit" value="Delete" />
            </form>
        </Fragment>
    )
}

export default ModifyType