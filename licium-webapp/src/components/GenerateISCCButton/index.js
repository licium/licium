import React, { useContext, useState } from 'react'
import { useToast } from '@chakra-ui/core'
import Dropzone from 'react-dropzone'
import { API_PATH } from '../../App'
import { StyledButton } from '../Menu'
import { ISCCContext } from '../../contexts/ISCCContext'
import { v4 as uuidv4 } from 'uuid'

const GenerateISCCButton = ({ disabled }) => {
    const [counter, setCounter] = useState(0)

    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()
    const { isccs, setIsccs } = useContext(ISCCContext)

    const handleFiles = async (files) => {
        let counter = 0
        const mutableCodes = isccs
        await Promise.all(
            files.map(async (file) => {
                const formData = new FormData()
                formData.append('file', file)
                formData.append('title', file.name)

                try {
                    const response = await fetch(
                        `${API_PATH}/generate/from_file`,
                        {
                            method: 'POST',
                            body: formData,
                        }
                    )
                    setCounter(Math.round((++counter / files.length) * 100))
                    if (response.status !== 200) {
                        displayError(response.status)
                        return
                    }
                    const iscc = await response.json()
                    const isccWithDate = {
                        ...iscc,
                        id: uuidv4(),
                        date: new Date().toISOString(),
                    }
                    mutableCodes.unshift(isccWithDate)
                    setIsccs([...mutableCodes])
                } catch (e) {
                    console.error(e)
                    displayError(e.message)
                }
            })
        )
        setIsLoading(false)
    }

    const displayError = (message) => {
        toast({
            title: 'An error occurred.',
            description: `Something went wrong. ${message}`,
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'top-right',
        })
    }

    const loadingText = () => (isLoading ? `Submitting (${counter}%)` : '')

    return (
        <Dropzone
            onDrop={(acceptedFiles) => handleFiles(acceptedFiles)}
            onFileDialogCancel={() => setIsLoading(false)}
        >
            {({ getRootProps, getInputProps }) => (
                <section>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <StyledButton
                            disabled={disabled}
                            isLoading={isLoading}
                            loadingText={loadingText()}
                            onClick={() => {
                                setIsLoading(true)
                                setCounter(0)
                            }}
                        >
                            Generate ISCCs
                        </StyledButton>
                    </div>
                </section>
            )}
        </Dropzone>
    )
}

export default GenerateISCCButton
