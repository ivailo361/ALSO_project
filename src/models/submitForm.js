import { useState } from 'react'
import { putComponentData } from './fetcher'
import db from '../storage/database'
import { importData } from './fetcher'
import useNotifications from './notification'


const useSubmitForm = (part) => {
    const [inputs, setInputs] = useState({ ...part });
    const { error, notify, errorMessage, notifyMessage, closeMessage} = useNotifications()

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

    const uploadExcel = (e, fileInput) => {
        e.preventDefault();

        const file = fileInput.current.files;
        const formData = new FormData();

        formData.append("avatar", file[0]);
        formData.append("text", 'some text');

        importData('/api/edit', formData)
            .then(res => {
                notifyMessage(res)
            })
            .catch(e => {
                console.log(e)
                errorMessage(e.message)
            })
    }

    return {
        inputs,
        notify,
        error,
        handleInputChange,
        handleSelectModels,
        handleSubmit,
        closeMessage,
        uploadExcel,
    };
}


export default useSubmitForm

