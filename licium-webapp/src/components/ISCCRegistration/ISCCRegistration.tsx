import React, { FormEvent, useState } from 'react'
import ISCC, { ISCCCode } from '../ISCC/ISCC'
import { API_PATH } from '../../App'
import Dropzone from 'react-dropzone'
import './ISCCRegistration.scss'

export function ISCCRegistration() {
  const [url, setUrl] = useState<string>('')
  const [isccCodes, setIsccCodes] = useState<ISCCCode[]>([])
  const [isWorking, setIsWorking] = useState(false)
  const [isUrlInvalid, setIsUrlInvalid] = useState(false)

  const handleSumit = async (event: FormEvent) => {
    console.log(url)
    event.preventDefault()
    setIsWorking(true)

    const response = await fetch(`${API_PATH}/generate/from_url?url=${url}`, {
      method: 'POST',
    })
    if (response.status === 200) {
      const json = await response.json()
      setIsccCodes([...isccCodes, json])
      setIsUrlInvalid(false)
    } else {
      setIsUrlInvalid(true)
    }
    setIsWorking(false)
  }

  const handleFile = async (files: File[]) => {
    const newCodes = await Promise.all(
      files.map(async (file) => {
        const formData = new FormData()
        formData.append('file', file)
        const response = await fetch(`${API_PATH}/generate/from_file`, {
          method: 'POST',
          body: formData,
        })
        return (await response.json()) as ISCCCode
      })
    )

    setIsccCodes([...isccCodes, ...newCodes])
  }

  return (
    <div className="container">
      <h1 className="title is1">ISCC Registration</h1>
      <form onSubmit={(event) => handleSumit(event)}>
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
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
        <div className="field">
          <label className="label">Generate from URL</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter URL"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
            />
          </div>
          {isUrlInvalid ? (
            <p className="help is-danger">This URL does not work</p>
          ) : (
            ''
          )}
        </div>
        <div className="field">
          <div className="control">
            <input
              type="submit"
              className="button is-link"
              value="Submit"
              disabled={isWorking || !url}
            />
            {isWorking ? (
              <span className="icon is-medium">
                <i className="fa fa-spinner fa-lg fa-pulse" />
              </span>
            ) : (
              ''
            )}
          </div>
        </div>
      </form>
      {isccCodes.length === 0 ? (
        ''
      ) : (
        <div>
          <h1>Generated Codes</h1>
          {isccCodes.map((code) => (
            <ISCC iscc={code} />
          ))}
        </div>
      )}
    </div>
  )
}
