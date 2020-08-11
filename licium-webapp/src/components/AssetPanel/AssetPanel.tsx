import React, { useState } from 'react'
import { AssetItem } from '../Assets/Assets'

export default function AssetPanel(props: { selectedAssets: AssetItem[] }) {
  const [assetsVisible, setAssetsVisible] = useState<boolean>(true)
  const [selectedAssets] = useState(props.selectedAssets)

  const assetList = selectedAssets.map((asset) =>
    assetsVisible ? (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a className="panel-block" key={asset.id}>
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true" />
        </span>

        {asset.fileName}
      </a>
    ) : (
      ''
    )
  )

  const buttonIcon = () =>
    assetsVisible ? (
      <i className="icon fas fa-caret-down" />
    ) : (
      <i className="icon fas fa-caret-up" />
    )

  return (
    <nav className="asset-panel panel">
      <p
        className="panel-heading"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <span>{selectedAssets.length} assets selected</span>
        <span>
          <button
            className="button is-light is-small "
            onClick={() => setAssetsVisible(!assetsVisible)}
          >
            {buttonIcon()}
          </button>
        </span>
      </p>

      <div
        className={`asset-list ${assetsVisible ? 'expanded' : 'contracted'}`}
      >
        {assetList}
      </div>
    </nav>
  )
}
