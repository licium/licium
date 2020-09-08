import React, { useEffect, useState } from 'react'
import ISCCField from './ISCCField/ISCCField'

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

  const isccCodes = () => (
    <tr>
      {props.iscc.iscc.split('-').map((code, idx) => (
        <td key={idx}>{code}</td>
      ))}
    </tr>
  )

  const bits = () =>
    iscc.bits.map((bit, idx) => (
      <tr key={idx}>
        <td>
          <code>{bit}</code>
        </td>
      </tr>
    ))

  useEffect(() => {
    if (props.iscc !== iscc) {
      setISCC(props.iscc)
    }
  })

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
      </form>
      <table className="table is-narrow">
        <thead>
          <tr>
            <th>Meta-ID</th>
            <th>Content-ID</th>
            <th>Data-ID</th>
            <th>Instance-ID</th>
          </tr>
        </thead>
        <tbody>{isccCodes()}</tbody>
      </table>
      <table className="table is-narrow">
        <thead>
          <tr>
            <th>Bits</th>
          </tr>
        </thead>
        <tbody>{bits()}</tbody>
      </table>
    </div>
  )
}
