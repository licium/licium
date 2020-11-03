import React from 'react'
import LabeledValue from './index'

export default {
    title: 'Components/LabeledValue',
    component: LabeledValue,
}

export const Default = () => (
    <LabeledValue label={'Serious Header'}>
        Some long text, describing a detail
    </LabeledValue>
)

export const Multiple = () => (
    <div>
        <LabeledValue label={'Serious Header'}>
            Some long text, describing a detail
        </LabeledValue>
        <LabeledValue label={'Other Header'}>
            Some longer text, describing a more detailed detail
        </LabeledValue>
        <LabeledValue label={'A number'}>23</LabeledValue>
    </div>
)
