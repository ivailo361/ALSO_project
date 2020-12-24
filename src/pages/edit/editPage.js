import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useParams, Switch } from 'react-router-dom'
import db from '../../storage/database'
import Aside from '../../mainComponents/aside/aside'
import { Content } from '../../stylesComponents/content'
import { ErrorMsg, NotificationMsg } from '../../mainComponents/messenger/message'
import useSubmitForm from '../../models/submitForm'
import PartDetails from './partDetails'



function EditPage() {
    const [part, setPart] = useState(null)
    const fileInput = useRef(null)
    const { id } = useParams();
    const { notify, error, uploadExcel, closeMessage } = useSubmitForm(part);

    const links = db.getManufacturerList()
    const data = db.getComponentsData()


    useEffect(() => {
        let part = data.find(x => x._id === id)
        setPart(part)
    }, [data, id])


    return (
        <Fragment>
            {error ? <ErrorMsg message={error} closeMessage={closeMessage} /> : null}
            {notify ? <NotificationMsg message={notify} closeMessage={closeMessage} /> : null}

            <Aside list={links} />
            <Content>
                {!part
                    ? <Fragment>
                        <h1>Add new Excel file with database!</h1>
                        <form onSubmit={(e) => uploadExcel(e, fileInput)}>
                            <input type="file" name="files" multiple ref={fileInput} />
                            <button theme="standard" type="submit" name="submit">Upload Files</button>
                        </form>
                    </Fragment>
                    : <PartDetails part={part} />}
            </Content>
        </Fragment>
    )
}


export default EditPage
