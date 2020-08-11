import React, { useState } from 'react'
import ActionButton from '../ActionButton/ActionButton'
import AssetsTable from '../AssetsTable/AssetsTable'
import PageTitle, { PageTitleProps } from '../PageTitle/PageTitle'
import { manyDemoItems } from '../AssetsTable/manyDemoItems'
import { Moment } from 'moment'

export interface AssetItem {
  id: string
  title: string
  metaCode: string
  contentCode: string
  fileName: string
  location: string
  timestamp: Moment
}

export default function Assets(props: {
  onAssetsSelected: (assets: AssetItem[]) => void
}) {
  const [selectedItems, setSelectedItems] = useState<AssetItem[]>([])

  const pageTitle: PageTitleProps = {
    title: 'Your Assets',
    description: `Choose an Item from the list to perfom an action on it`,
  }

  const itemSelected = (items: AssetItem[]) => {
    setSelectedItems(items)
    props.onAssetsSelected(items)
  }

  return (
    <div className={'container'}>
      <PageTitle {...pageTitle} />

      <div className="level">
        <div className="level-left" />
        <div className="level-right">
          <div className="level-item">
            <ActionButton disabled={selectedItems.length === 0} />
          </div>
        </div>
      </div>
      <div className="level">
        <AssetsTable
          tableData={manyDemoItems}
          onItemSelected={(items) => itemSelected(items)}
        />
      </div>
    </div>
  )
}
