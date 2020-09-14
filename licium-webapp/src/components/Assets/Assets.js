import React, { useState } from 'react'
import ActionButton from '../ActionButton/ActionButton'
import AssetsTable from '../AssetsTable/AssetsTable'
import PageTitle from '../PageTitle/PageTitle'
import { manyDemoItems } from '../AssetsTable/manyDemoItems'

export default function Assets(props) {
    const [selectedItems, setSelectedItems] = useState([])

    const pageTitle = {
        title: 'Your Assets',
        description: `Choose an Item from the list to perfom an action on it`,
    }

    const itemSelected = (items) => {
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
