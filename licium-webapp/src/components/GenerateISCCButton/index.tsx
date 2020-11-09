import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { StyledButton } from '../Menu'
import { useActions } from '../../overmind'

type GenerateISCCButtonProps = {
    disabled?: boolean
}

const GenerateISCCButton = ({ disabled = false }: GenerateISCCButtonProps) => {
    const [counter, setCounter] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const actions = useActions()

    const handleFiles = async (files: File[]) => {
        let counter = 0
        await Promise.all(
            files.map(async (file) => {
                await actions.isccs.generateISCCFromFile(file)
                setCounter(Math.round((++counter / files.length) * 100))
            })
        )
        setIsLoading(false)
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
                            isDisabled={disabled}
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
