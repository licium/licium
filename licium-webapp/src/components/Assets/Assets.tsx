import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ActionButton from '../ActionButton/ActionButton'
import AssetsTable from '../AssetsTable/AssetsTable'
import './Assets.scss'
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
    <Container className={'assets'}>
      <Row>
        <Col>
          <PageTitle {...pageTitle} />
        </Col>
        <Col className={'action-buttons'}>
          <ActionButton disabled={assetSelected} />
        </Col>
      </Row>
      <Row>
        <AssetsTable />
      </Row>
    </Container>
  )
}
