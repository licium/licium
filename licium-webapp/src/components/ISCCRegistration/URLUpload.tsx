import React, { FormEvent, useState } from 'react'

export const URLUploadIds = {
    submitButton: 'url-input-submit',
    inputField: 'url-input-text',
}

export default function URLUpload(props: {
    handleSubmit: (url: string) => void
    disabled?: boolean
    isUrlInvalid?: boolean
}) {
    const [url, setUrl] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        props.handleSubmit(url)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label className="label">Generate from URL:</label>
                <input
                    id={URLUploadIds.inputField}
                    className="input"
                    type="text"
                    value={url}
                    disabled={props.disabled}
                    onChange={(e) => setUrl(e.target.value)}
                />
            </div>
            {props.isUrlInvalid ? (
                <p className="help is-danger">This URL does not work</p>
            ) : (
                ''
            )}
            <div className="field">
                <div className="control">
                    <input
                        id={URLUploadIds.submitButton}
                        type="submit"
                        className="button is-link"
                        value="Submit"
                        disabled={props.disabled || !url}
                    />
                    {props.disabled ? (
                        <span className="icon is-medium">
                            <i className="fa fa-spinner fa-lg fa-pulse" />
                        </span>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </form>
    )
}
