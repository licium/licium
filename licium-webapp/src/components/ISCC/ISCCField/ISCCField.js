import React, { useEffect, useState } from 'react'

export default function ISCCField(props) {
    const [value, setValue] = useState(props.value)

    const handleInputChange = (value) => {
        if (props.onEdit) {
            props.onEdit(value)
        }
        setValue(value)
    }

    useEffect(() => {
        if (props.value !== value) {
            setValue(props.value)
        }
    }, [props.value, value])

    return (
        <div className="field">
            <div className="control is-small">
                <label className="label is-small">{props.label}:</label>
                <input
                    type="text"
                    required={props.required}
                    disabled={props.onEdit === undefined}
                    className="input is-small"
                    value={value}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
            </div>
        </div>
    )
}
