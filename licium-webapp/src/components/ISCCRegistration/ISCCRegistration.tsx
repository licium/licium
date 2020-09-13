import React, { useState } from 'react'
import ISCC, { ISCCCode, ISCCMetaId } from '../ISCC/ISCC'
import { API_PATH } from '../../App'
import Dropzone from 'react-dropzone'
import './ISCCRegistration.scss'
import * as R from 'ramda'
import URLUpload from './URLUpload'
import { generateFromURL } from './ISCCServiceAdapter'
import { replaceMetaInfoOnISCC } from './ISCCModifier'
import { useLocalStorage } from '../../hooks/localstorage'

export function ISCCRegistration() {
    const [isccCodes, setIsccCodes] = useLocalStorage<ISCCCode[]>('ISCCS', [])
    const [isWorking, setIsWorking] = useState(false)
    const [isUrlInvalid, setIsUrlInvalid] = useState(false)

    const handleUrlSubmit = async (url: string) => {
        setIsWorking(true)
        try {
            const iscc = await generateFromURL(url)
            setIsccCodes([...isccCodes, iscc])
            setIsUrlInvalid(false)
        } catch (error) {
            console.error(error)
            setIsUrlInvalid(true)
        } finally {
            setIsWorking(false)
        }
    }

    const handleFile = async (files: File[]) => {
        const newCodes = await Promise.all(
            files.map(async (file) => {
                const formData = new FormData()
                formData.append('file', file)
                formData.append('title', file.name)
                const response = await fetch(`${API_PATH}/generate/from_file`, {
                    method: 'POST',
                    body: formData,
                })
                return (await response.json()) as ISCCCode
            })
        )

        setIsccCodes([...isccCodes, ...newCodes])
    }
    const regenMetaId = async (idx: number, title: string, extra: string) => {
        const response = await fetch(`${API_PATH}/generate/meta_id/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                title,
                extra,
            }),
        })
        const newId: ISCCMetaId = await response.json()
        const newIscc = replaceMetaInfoOnISCC(isccCodes[idx], newId)

        setIsccCodes([
            ...isccCodes.splice(0, idx),
            newIscc,
            ...isccCodes.splice(idx + 1),
        ])
    }

    const renderISCCPair = (pairId: number, pair: ISCCCode[]) =>
        pair.map((iscc, isccId) => (
            <div className={'column'} key={iscc.iscc}>
                <ISCC
                    iscc={iscc}
                    onRegenMetaId={(title, extra) =>
                        regenMetaId(2 * pairId + isccId, title, extra)
                    }
                    onDeleteClick={() => removeISCC(2 * pairId + isccId)}
                />
            </div>
        ))

    const renderISCCs = () =>
        R.splitEvery(2, isccCodes).map((pair, pairId) => (
            <div key={`pair-${pairId}`} className="columns">
                {renderISCCPair(pairId, pair)}
            </div>
        ))

    const removeISCC = (idx: number) => {
        setIsccCodes([...isccCodes.slice(0, idx), ...isccCodes.slice(idx + 1)])
    }

    return (
        <div className="container">
            <h1 className="title is1">ISCC Registration</h1>
            <div className="field">
                <label className="label">Generate from file</label>
                <Dropzone onDrop={(acceptedFiles) => handleFile(acceptedFiles)}>
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps()} className="dropzone">
                                <input {...getInputProps()} />
                                <p>
                                    <span className="icon">
                                        <i className="fas fa-download" />
                                    </span>
                                </p>
                                <p>
                                    Drag 'n' drop some files here, or click to
                                    select files
                                </p>
                            </div>
                        </section>
                    )}
                </Dropzone>
            </div>
            <URLUpload
                handleSubmit={handleUrlSubmit}
                disabled={isWorking}
                isUrlInvalid={isUrlInvalid}
            />
            {isccCodes.length === 0 ? (
                ''
            ) : (
                <div>
                    <h1 className="title is-1">Generated Codes</h1>
                    {renderISCCs()}
                </div>
            )}
        </div>
    )
}
