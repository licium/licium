import React, { useEffect, useState } from 'react'
import ISCCField from './ISCCField/ISCCField'
import * as R from 'ramda'

export default function ISCC(props) {
    const [title, setTitle] = useState(props.iscc.title)
    const [extra, setExtra] = useState(props.iscc.extra || '')
    const [iscc, setISCC] = useState(props.iscc)

    const renderBits = (bits) =>
        R.splitEvery(16, bits)
            .map((value, idx) => <code key={`c${idx}`}>{value}</code>)
            .reduce((prev, cur, idx) => [prev, <br key={`b${idx}`} />, cur])

    useEffect(() => {
        if (props.iscc !== iscc) {
            setISCC(props.iscc)
        }
    }, [iscc, props.iscc])

    return (
        <div className="box iscc">
            <div className="message-header">
                {props.iscc.title}
                <button
                    className="delete"
                    onClick={() => props.onDeleteClick()}
                />
            </div>
            <form
                className="form"
                onSubmit={(event) => {
                    event.preventDefault()
                    props.onRegenMetaId(title, extra)
                }}
            >
                <div className="columns">
                    <div className="column">
                        <ISCCField
                            label={'Title'}
                            required={true}
                            value={title}
                            onEdit={(value) => setTitle(value)}
                        />
                    </div>
                    <div className="column">
                        <ISCCField
                            label={'Extra'}
                            value={extra}
                            onEdit={(value) => setExtra(value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <input
                        type="submit"
                        className="button is-small"
                        value="Regenerate Meta-ID"
                    />
                </div>
                <ISCCField label={'ISCC'} value={iscc.iscc} />
                <ISCCField label={'Tophash'} value={iscc.tophash} />
                <ISCCField label={'GMT'} value={iscc.gmt} />
                <div className="field">
                    <div className="columns ">
                        <div className="column is-narrow">
                            <div className="columns is-mobile">
                                <div className="column is-narrow">
                                    <p key={0} className="title is-7">
                                        Meta-ID
                                    </p>
                                    <p key={1} className="subtitle is-7">
                                        {iscc.iscc.split('-')[0]}
                                    </p>
                                    <p key={2} className="is-7">
                                        {renderBits(iscc.bits[0])}
                                    </p>
                                </div>
                                <div className="column is-narrow">
                                    <p className="title is-7">Content-ID</p>
                                    <p className="subtitle is-7">
                                        {iscc.iscc.split('-')[1]}
                                    </p>
                                    <p className="is-7">
                                        {renderBits(iscc.bits[1])}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-narrow">
                            <div className="columns is-mobile">
                                <div className="column is-narrow">
                                    <p className="title is-7">Data-ID</p>
                                    <p className="subtitle is-7">
                                        {iscc.iscc.split('-')[2]}
                                    </p>
                                    <p className="is-7">
                                        {renderBits(iscc.bits[2])}
                                    </p>
                                </div>
                                <div className="column is-narrow">
                                    <p className="title is-7">Data-ID</p>
                                    <p className="subtitle is-7">
                                        {iscc.iscc.split('-')[3]}
                                    </p>
                                    <p className="is-7">
                                        {renderBits(iscc.bits[3])}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
