import React, { FormEvent, useState } from 'react'

export interface ISCC {
  bits: string[]
  extra: string
  extra_trimmed: string
  gmt: string
  iscc: string
  title: string
  title_trimmed: string
  tophash: string
}

export function ISCCRegistration() {
  const [url, setUrl] = useState<string>()
  const [iscc, setISCC] = useState<ISCC>()

  const handleSumit = async (event: FormEvent) => {
    console.log(url)
    event.preventDefault()
    const response = await fetch(`/generate/from_url?url=${url}`, {
      method: 'POST',
    })
    const json = await response.json()
    setISCC(json)
  }

  return (
    <div>
      <h1>ISCC Registration</h1>
      <form onSubmit={(event) => handleSumit(event)}>
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
        </div>
        {iscc ? (
          <div>
            <div>iscc: {iscc.iscc}</div>
          </div>
        ) : (
          ''
        )}
        <div className="field">
          <div className="control">
            <input type="submit" className="button is-link" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  )
}
