import React, { FormEvent, useState } from 'react'
import ISCC, { ISCCCode } from '../ISCC/ISCC'
import { API_PATH } from '../../App'

export function ISCCRegistration() {
  const [url, setUrl] = useState<string>(
    'https://www.tagesschau.de/multimedia/bilder/spahn-425~_v-videowebl.jpg'
  )
  const [isccCodes, setIsccCodes] = useState<ISCCCode[]>([])

  const handleSumit = async (event: FormEvent) => {
    console.log(url)
    event.preventDefault()
    const response = await fetch(`${API_PATH}/generate/from_url?url=${url}`, {
      method: 'POST',
    })
    const json = await response.json()
    setIsccCodes([...isccCodes, json])
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

        <div className="field">
          <div className="control">
            <input type="submit" className="button is-link" value="Submit" />
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
