import React from 'react'
import { Container, ListGroup, Row } from 'react-bootstrap'
import PageTitle, { PageTitleProps } from '../PageTitle/PageTitle'
import { useSelector } from 'react-redux'
import { AssetItem, selectSelectedAssets } from '../../store/asset/assetSlice'

const spliceArray: <T>(arrayToSplice: T[], chunkSize: number) => T[][] = (
  arrayToSplice,
  chunksize
) =>
  [...Array(Math.floor(arrayToSplice.length / chunksize) + 1)].map((_, index) =>
    arrayToSplice.slice(index * chunksize, index * chunksize + chunksize)
  )

export default function Registration() {
  const columnsInAssetList = 4

  const pageTitleProps: PageTitleProps = {
    title: 'Registration',
    description: 'Register your assets on the blockchain.',
  }

  const selectedAssets = useSelector(selectSelectedAssets)

  const assetList = spliceArray(selectedAssets, columnsInAssetList).map(
    (chunk: AssetItem[]) => {
      const listGroupItems = chunk.map((item) => (
        <ListGroup.Item>`${item.fileName}`</ListGroup.Item>
      ))

      return (
        <Row>
          <ListGroup horizontal>{listGroupItems}</ListGroup>
        </Row>
      )
    }
  )

  return (
    <Container>
      <Row>
        <PageTitle {...pageTitleProps} />
      </Row>

      {assetList}
    </Container>
  )
}
