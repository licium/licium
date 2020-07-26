import React, { FormEvent, useState } from 'react'
import PageTitle, { PageTitleProps } from '../PageTitle/PageTitle'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearSelection,
  selectSelectedAssets,
} from '../../store/asset/assetSlice'
import './Registration.scss'
import { useHistory } from 'react-router-dom'

export default function Registration() {
  const pageTitleProps: PageTitleProps = {
    title: 'Registration',
    description: 'Register your assets on the blockchain.',
  }

  const selectedAssets = useSelector(selectSelectedAssets)
  const [assetsVisible, setAssetsVisible] = useState<boolean>(false)

  const assetList = selectedAssets.map((asset) =>
    assetsVisible ? (
      <span className="panel-block">
        <i className="fas fa-book" aria-hidden="true" />
        {asset.fileName}
      </span>
    ) : (
      ''
    )
  )

  const dispatch = useDispatch()
  const history = useHistory()

  const buttonText = () => (assetsVisible ? 'Hide assets' : 'Show assets')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    dispatch(clearSelection())

    history.push('/registrationSuccessful')
  }

  return (
    <div className="container">
      <PageTitle {...pageTitleProps} />

      <nav className="panel">
        <p className="panel-heading">{selectedAssets.length} assets selected</p>
        {assetList}
        <div className="panel-block">
          <button
            onClick={() => setAssetsVisible(!assetsVisible)}
            className="button is-link is-outlined is-fullwidth"
          >
            {buttonText()}
          </button>
        </div>
      </nav>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="field">
          <label className="label">Select Blockchain</label>
          <div className="control">
            <div className="select">
              <select>
                <option>Ethereum</option>
                <option>Bloxberg</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Select Wallet</label>
          <div className="control">
            <div className="select">
              <select>
                <option>MyWallet</option>
                <option>Someone elses wallet</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Register</button>
          </div>
        </div>
      </form>
    </div>
  )
}
