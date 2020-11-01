import ISCCDetails from './index'
import React from 'react'
import { config } from '../../overmind'
import { Provider } from 'overmind-react'
import { createOvermindMock } from 'overmind'
import { MemoryRouter as Router, Route } from 'react-router-dom'

const overmind = createOvermindMock(config, {
    isccs: {
        storeIsccsToLocalStorage: () => {},
    },
})
overmind.actions.isccs.addIscc({
    iscc: 'CCEqyaQMDzYTK-CTUGBMZio4Xzd-CD1dvwHcNHfi1-CRDg3NoToS7VV',
    iscc_raw:
        '0052df7dc1bb8b19ef10a2fcb67920c01c7e204584a2ccb7bb883130c35716a633c6f7aa',
    title:
        'Decentralization and Scarcity - Blockchain and the Cultural Industries',
    title_trimmed:
        'decentralization and scarcity blockchain and the cultural industries',
    tophash: 'c35716a633c6f7aa2ebdf00b79bd0be093e73505711fd7524a4e4a77700f4015',
    gmt: 'text',
    bits: [
        '0101001011011111011111011100000110111011100010110001100111101111',
        '1010001011111100101101100111100100100000110000000001110001111110',
        '0100010110000100101000101100110010110111101110111000100000110001',
        '1100001101010111000101101010011000110011110001101111011110101010',
    ],
    filename: 'Paper_2.pdf',
    id: '83c35897-5ff3-4ef3-b9ba-fab1d18b34d9',
    date: '2020-10-12T18:34:06.091Z',
    transactionLink:
        'https://blockexplorer.bloxberg.org/tx/0x4a8095d5f649b1fc5a9ba5149d785a7101cd2d392bb32e5355757f9484ebde9c',
    registrationId: '29C3XxdrziNfM',
})

export default {
    title: 'Pages/ISCCDetails',
    component: ISCCDetails,
    decorators: [
        (Story) => (
            <Provider value={overmind}>
                <Router
                    initialEntries={['/83c35897-5ff3-4ef3-b9ba-fab1d18b34d9']}
                    initialIndex={0}
                >
                    <Route path="/:id">
                        <Story />
                    </Route>
                </Router>
            </Provider>
        ),
    ],
}

export const Default = () => <ISCCDetails />
