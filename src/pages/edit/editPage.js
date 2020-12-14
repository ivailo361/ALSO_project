import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom'
import db from '../../storage/database'
import Aside from '../../mainComponents/aside/aside'
import { Content } from '../../stylesComponents/content'
import ErrorMsg from '../../mainComponents/errorMsg/errorMsg'
import { importData } from '../../models/fetcher'
import PartDetails from './partDetails'


function EditPage() {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [part, setPart] = useState(null)
    const fileInput = useRef(null)
    let { id } = useParams();
    const links = db.getManufacturerList()
    const data = db.getComponentsData()

    useEffect(() => {
        let part = data.find(x => x._id === id)
        setPart(part)
    }, [])


    const uploadExcel = (e) => {
        e.preventDefault();

        const file = fileInput.current.files;
        const formData = new FormData();

        formData.append("avatar", file[0]);
        formData.append("text", 'some text');

        importData('/api/edit', formData)
            .then(res => {
                console.log('response')
                setResponse(res)
            })
            .catch(e => setError(e.message))
    }

    function closeMessage() {
        setError(null)
    }

    return (
        <Fragment>
            {error ? <ErrorMsg message={error} closeMessage={() => closeMessage()} /> : null}
            <Aside list={links} />
            <Content>
                <h1>Add new Excel file with database!</h1>
                <div>{JSON.stringify(response)}</div>
                <form onSubmit={(e) => uploadExcel(e)}>
                    <input type="file" name="files" multiple ref={fileInput} />
                    <button theme="standard" type="submit" name="submit">Upload Files</button>
                </form>
                <PartDetails part={part} />
            </Content>
        </Fragment>
    )
}


export default EditPage
