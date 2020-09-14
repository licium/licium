import React from 'react'
import ISCCField from './ISCCField'

export default {
  title: 'ISCCField',
  component: ISCCField,
}

export const Default = () => {
  return <ISCCField label={'Title'} value={'A Title'} />
}

export const Editable = () => {
  return <ISCCField label={'Title'} value={'A Title'} onEdit={() => {}} />
}
