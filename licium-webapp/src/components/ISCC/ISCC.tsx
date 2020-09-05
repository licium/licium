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

export default function ISCC(props: { iscc: ISCCCode }) {
  return (
    <fieldset>
      <legend>ISCC Code</legend>
      <div>
        <span>Bits: </span>
        <span>{props.iscc.bits.join(', ')}</span>
      </div>
      <div>
        <span>Extra:</span>
        <span>{props.iscc.extra}</span>
      </div>
      <div>
        <span>Extra (trimmed):</span>
        <span>{props.iscc.extra_trimmed}</span>
      </div>
      <div>
        <span>GMT:</span>
        <span>{props.iscc.gmt}</span>
      </div>
      <div>
        <span>ISCC:</span>
        <span>{props.iscc.iscc}</span>
      </div>
      <div>
        <span>Title:</span>
        <span>{props.iscc.title}</span>
      </div>
      <div>
        <span>Title (trimmed):</span>
        <span>{props.iscc.title_trimmed}</span>
      </div>
      <div>
        <span>Tophas:</span>
        <span>{props.iscc.tophash}</span>
      </div>
    </fieldset>
  )
}
