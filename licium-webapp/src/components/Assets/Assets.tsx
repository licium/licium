import React from 'react'
import ActionButton from '../ActionButton/ActionButton'
import AssetsTable from '../AssetsTable/AssetsTable'
import PageTitle, { PageTitleProps } from '../PageTitle/PageTitle'
import { useSelector } from 'react-redux'
import { selectNoAssetSelected } from '../../store/asset/assetSlice'

export default function Assets() {
  const pageTitle: PageTitleProps = {
    title: 'Your Assets',
    description: `Choose an Item from the list to perfom an action on it`,
  }

  const assetSelected = useSelector(selectNoAssetSelected)

  return (
    <div className={'container'}>
      <PageTitle {...pageTitle} />

      <div className="level">
        <div className="level-left" />
        <div className="level-right">
          <div className="level-item">
            <ActionButton disabled={assetSelected} />
          </div>
        </div>
      </div>
      <div className="level">
        <AssetsTable />
      </div>
    </div>
  )
}
