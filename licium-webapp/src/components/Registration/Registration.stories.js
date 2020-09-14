import React from 'react'
import Registration from './Registration'
import { manyDemoItems } from '../AssetsTable/manyDemoItems'

export default {
  title: 'Registration',
  component: Registration,
}

export const Default = () => {
  return <Registration assetsForRegistration={manyDemoItems} />
}
