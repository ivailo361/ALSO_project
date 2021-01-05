import React, { Fragment, useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import { useParams, } from 'react-router-dom'
import db from '../../storage/database'
import { importData } from '../../models/fetcher'
import Aside from '../../mainComponents/aside/aside'
import { Content } from '../../stylesComponents/content'
import { ErrorMsg, NotificationMsg } from '../../mainComponents/messenger/message'
import useNotifications from '../../models/notification'
// import useSubmitForm from '../../models/submitForm'
import PartDetails from './partDetails'
import ModifyType from './modifyType'



function EditPage() {
    const [part, setPart] = useState(null)
    const fileInput = useRef(null)
    const { id } = useParams();
    // const { notify, error, uploadExcel, closeMessage } = useSubmitForm(part);
    const { error, notify, errorMessage, notifyMessage, closeMessage } = useNotifications()

    const links = db.getManufacturerList()
    const data = db.getComponentsData()


    useEffect(() => {
        let part = data.find(x => x._id === id)
        setPart(part)

    }, [data, id])


    const uploadExcel = (e, fileInput) => {
        e.preventDefault();

        const file = fileInput.current.files;
        const formData = new FormData();

        formData.append("avatar", file[0]);
        formData.append("text", 'some text');

        importData('/api/edit', formData)
            .then(res => {
                notifyMessage(res)
                setTimeout(() => {
                    window.location.assign('/stock')
                }, 3000);
            })
            .catch(e => {
                console.log(e)
                errorMessage(e.message)
            })
    }

    return (
        <Fragment>
            {error ? <ErrorMsg message={error} closeMessage={closeMessage} /> : null}
            {notify ? <NotificationMsg message={notify} closeMessage={closeMessage} /> : null}

            <Aside list={links} />
            <Content>
                {!part
                    ? <Fragment>
                        <div>
                            <H1>Add new Excel file with database!</H1>
                            <Form onSubmit={(e) => uploadExcel(e, fileInput)}>
                                <input type="file" name="files" multiple ref={fileInput} />
                                <Button theme="standard" type="submit" name="submit">Upload Files</Button>
                            </Form>
                        </div>
                        <ModifyType />
                    </Fragment>
                    : <PartDetails part={part} />}
            </Content>
        </Fragment>
    )
}


export default EditPage

const Button = styled.button`
    display: block;
`
const H1 = styled.h1`
    text-align: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`