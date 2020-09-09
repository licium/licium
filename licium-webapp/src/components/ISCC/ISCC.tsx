import React, { useEffect, useState } from 'react'
import ISCCField from './ISCCField/ISCCField'
import * as R from 'ramda'

export interface ISCCCode {
  bits: string[]
  extra: string
  extra_trimmed: string
  gmt: string
  iscc: string
  title: string
  title_trimmed: string
  tophash: string
}

export interface ISCCMetaId {
  code: string
  bits: string
  ident: number
  title: string
  title_trimmed: string
  extra: string
  extra_trimmed: string
}

export default function ISCC(props: {
  iscc: ISCCCode
  onRegenMetaId: (title: string, extra: string) => void
}) {
  const [title, setTitle] = useState(props.iscc.title)
  const [extra, setExtra] = useState(props.iscc.extra)
  const [iscc, setISCC] = useState(props.iscc)

  const renderBits = (bits: string) =>
    R.splitEvery(16, bits)
      .map<React.ReactNode>((value, idx) => (
        <code key={`c${idx}`}>{value}</code>
      ))
      .reduce((prev, cur, idx) => [prev, <br key={`b${idx}`} />, cur])

  useEffect(() => {
    if (props.iscc !== iscc) {
      setISCC(props.iscc)
    }
  }, [iscc, props.iscc])

  return (
    <div className="box iscc">
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault()
          props.onRegenMetaId(title, extra)
        }}
      >
        <ISCCField
          label={'Title'}
          required={true}
          value={title}
          onEdit={(value) => setTitle(value)}
        />
        <ISCCField
          label={'Extra'}
          value={extra}
          onEdit={(value) => setExtra(value)}
        />
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
                  <p className="subtitle is-7">{iscc.iscc.split('-')[1]}</p>
                  <p className="is-7">{renderBits(iscc.bits[1])}</p>
                </div>
              </div>
            </div>
            <div className="column is-narrow">
              <div className="columns is-mobile">
                <div className="column is-narrow">
                  <p className="title is-7">Data-ID</p>
                  <p className="subtitle is-7">{iscc.iscc.split('-')[2]}</p>
                  <p className="is-7">{renderBits(iscc.bits[2])}</p>
                </div>
                <div className="column is-narrow">
                  <p className="title is-7">Data-ID</p>
                  <p className="subtitle is-7">{iscc.iscc.split('-')[3]}</p>
                  <p className="is-7">{renderBits(iscc.bits[3])}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
