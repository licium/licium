import React from 'react'
import ISCC, { ISCCCode } from './ISCC'

const iscc: ISCCCode = {
  tophash: 'aeed0934a90961e0fb6635e5c9bd13a4739c4c3f6e30aaffd75411d12e940316',
  bits: [
    '1001011000101110111011110101010100100101100100111000100001011111',
    '1110000110000011000110000110010110011110110011111001110001101001',
    '0011000110001010110010101100110001011001101101111110001101001100',
    '1010111011101101000010010011010010101001000010010110000111100000',
  ],
  title_trimmed: 'Title',
  extra_trimmed: 'extra foto',
  extra: 'Extra Foto',
  gmt: 'IMAGE',
  iscc: 'CCm7y4abbVN6r-CYeLkPETE1TPr-CD9TdCywdGcK3-CRWGC2JciDeP5',
  title: 'Title - Long',
}

export default {
  title: 'ISCC',
  component: <ISCC iscc={iscc} />,
}

export const Default = () => {
  return <ISCC iscc={iscc} />
}