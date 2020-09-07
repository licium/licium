import React from 'react'
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

const types: { [key: number]: string } = {
  0: 'Meta-ID',
  1: 'Content-ID',
  2: 'Data-ID',
  3: 'Instance-ID',
}

export default function ISCC(props: { iscc: ISCCCode }) {
  const codes = () =>
    props.iscc.iscc.split('-').map((code, idx) => (
      <tr>
        <td>{types[idx]}</td>
        <td>{code}</td>
        <td>
          <code>{props.iscc.bits[idx]}</code>
        </td>
      </tr>
    ))

  return (
    <div className="box iscc">
      <div className="meta">
        <p>
          <strong>Title: </strong>
          {props.iscc.title}
        </p>
        <p>
          <strong>Tophash: </strong>
          {props.iscc.tophash}
        </p>
        <p>
          <strong>Extra: </strong>
          {props.iscc.extra}
        </p>
        <p>
          <strong>GMT: </strong>
          {props.iscc.gmt}
        </p>
        <p>
          <strong>ISCC: </strong>
          {props.iscc.iscc}
        </p>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Code</th>
            <th>Bits</th>
          </tr>
        </thead>
        <tbody>{codes()}</tbody>
      </table>
    </div>
  )
}
