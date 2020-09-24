import React, { useContext, useState } from 'react'
import { useToast } from '@chakra-ui/core'
import Dropzone from 'react-dropzone'
import { API_PATH, ISCCContext } from '../../App'
import { useLocalStorage } from '../../hooks/localstorage'
import { LOCAL_STORAGE_KEY_ISSCS } from '../../utils/constants'
import { StyledButton } from '../Menu'

const GenerateISCCButton = () => {
    const [counter, setCounter] = useState(0)

    const [isLoading, setIsLoading] = useState(false)
    const [isccCodes, setIsccCodes] = useLocalStorage(
        LOCAL_STORAGE_KEY_ISSCS,
        []
    )
    const toast = useToast()
    const { setIsccs } = useContext(ISCCContext)

    const handleFiles = async (files) => {
        let counter = 0
        setCounter(0)
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
                    setCounter(++counter)
                    return await response.json()
                } catch (e) {
                    toast({
                        title: 'An error occurred.',
                        description: `Something went wrong. ${e.message}`,
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                        position: 'top-right',
                    })
                }
            })
        )
        setIsLoading(false)
        const codesWithDate = newCodes
            .filter((code) => !!code)
            .map((code) => ({
                ...code,
                date: new Date().toISOString(),
            }))
        setIsccs([...codesWithDate, ...isccCodes])

        setIsccCodes([...codesWithDate, ...isccCodes])
    }

    const loadingText = () => (isLoading ? `Submitting (${counter})` : '')

    return (
        <Dropzone
            onDrop={(acceptedFiles) => handleFiles(acceptedFiles)}
            onFileDialogCancel={() => setIsLoading(false)}
        >
            {({ getRootProps, getInputProps }) => (
                <section w="100%">
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <StyledButton
                            isLoading={isLoading}
                            loadingText={loadingText()}
                            onClick={() => setIsLoading(true)}
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
