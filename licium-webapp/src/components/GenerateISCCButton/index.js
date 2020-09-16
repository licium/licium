import React, { useContext, useState } from 'react'
import { Button, useToast } from '@chakra-ui/core'
import Dropzone from 'react-dropzone'
import { API_PATH, ISCCContext } from '../../App'
import { useLocalStorage } from '../../hooks/localstorage'
import { LOCAL_STORAGE_KEY_ISSCS } from '../../utils/constants'

const GenerateISCCButton = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isccCodes, setIsccCodes] = useLocalStorage(
        LOCAL_STORAGE_KEY_ISSCS,
        []
    )
    const toast = useToast()
    const { setIsccs } = useContext(ISCCContext)

    const handleFiles = async (files) => {
        const newCodes = await Promise.all(
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
                    return await response.json()
                } catch (e) {
                    toast({
                        title: 'An error occurred.',
                        description: `Something went wrong.`,
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                        position: 'top-right',
                    })
                }
            })
        )
        setIsLoading(false)
        const codesWithDate = newCodes.map((code) => ({
            ...code,
            date: new Date().toISOString(),
        }))
        setIsccs([...isccCodes, ...codesWithDate])

        setIsccCodes([...isccCodes, ...codesWithDate])
    }

    return (
        <Dropzone
            onDrop={(acceptedFiles) => handleFiles(acceptedFiles)}
            onFileDialogCancel={() => setIsLoading(false)}
        >
            {({ getRootProps, getInputProps }) => (
                <section>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Button
                            isLoading={isLoading}
                            loadingText="Submitting"
                            onClick={() => setIsLoading(true)}
                        >
                            Generate ISCCs
                        </Button>
                    </div>
                </section>
            )}
        </Dropzone>
    )
}

export default GenerateISCCButton
