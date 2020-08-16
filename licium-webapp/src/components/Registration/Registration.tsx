import React, { FormEvent } from 'react'
import PageTitle, { PageTitleProps } from '../PageTitle/PageTitle'
import { useDispatch } from 'react-redux'
import { clearSelection } from '../../store/asset/assetSlice'
import './Registration.scss'
import { useHistory } from 'react-router-dom'
import AssetPanel from '../AssetPanel/AssetPanel'

export default function Registration() {
  const pageTitleProps: PageTitleProps = {
    title: 'Registration',
    description: 'Register your assets on the blockchain.',
  }

  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    dispatch(clearSelection())

    history.push('/registrationSuccessful')
  }

  return (
    <div className="container">
      <PageTitle {...pageTitleProps} />

      <div className="columns">
        <div className="column is-one-third">
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
        <div className="column">
          <AssetPanel />
        </div>
      </div>
    </div>
  )
}
