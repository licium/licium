import React, { useContext, useState } from 'react'
import './Registration.scss'
import { ISCCContext } from '../../App'
import { Button, FormControl, FormLabel, Select } from '@chakra-ui/core'
import Box from '@chakra-ui/core/dist/Box'
import { useHistory } from 'react-router-dom'
import { ISCCButton } from '../../components/InfoButton/ISCCButton'
import { StyledTable } from '../EntryTable/elements'

const publisherAddresses = {
    CI: [
        'CI-Deposit 0x4354354154314315431532143',
        'CI-Deposit 0xa6b7a6b7a6a7676767f6767e8',
    ],
    BX: [
        'BX-Deposit 0x4354354154314315434322143',
        'BX-Deposit 0xa6b7a6b7a6a767676343267e8',
    ],
    BC: [
        'BC-Deposit 0x435435415431433243b532143',
        'BC-Deposit 0xa6b7a6b7a6a7673243b6767e8',
    ],
    ET: [
        'ET-Deposit 0x43543541faaebd15431532143',
        'ET-Deposit 0xa6b7a6b7faaebd6767f6767e8',
    ],
}

export default function Registration() {
    const { isccs, setIsccs, selectedEntries, setSelectedEntries } = useContext(
        ISCCContext
    )
    const [usedBlockchain, setUsedBlockchain] = useState('CI')
    const [usedPublisherAddress, setUsedPublisherAddress] = useState(
        publisherAddresses[usedBlockchain][0]
    )
    const history = useHistory()

    const cells = () =>
        selectedEntries.map((iscc, id) => (
            <tr key={id}>
                <td>{iscc.title}</td>
                <td>{iscc.extra}</td>
                <td>-</td>
                <td>{iscc.date}</td>
                <td className="centered">
                    <ISCCButton iscc={iscc} placement="left" />
                </td>
            </tr>
        ))

    const addressOptions = () =>
        publisherAddresses[usedBlockchain].map((value, idx) => (
            <option key={idx} value={value}>
                {value}
            </option>
        ))

    const submitEntries = (event) => {
        event.preventDefault()
        const registeredIsccs = isccs.map((iscc) =>
            selectedEntries.includes(iscc)
                ? {
                      ...iscc,
                      registration: {
                          usedBlockchain,
                          usedPublisherAddress,
                      },
                  }
                : iscc
        )
        setIsccs(registeredIsccs)
        setSelectedEntries([])
        history.push('/')
    }

    return (
        <StyledTable>
            {selectedEntries.length === 0 ? (
                <span>No entries selected</span>
            ) : (
                <Box>
                    <table>
                        <thead>
                            <tr>
                                <th>Filename</th>
                                <th>Embedded Title</th>
                                <th>Tag</th>
                                <th>Date</th>
                                <th className="centered">ISCC</th>
                            </tr>
                        </thead>
                        <tbody>{cells()}</tbody>
                    </table>
                    <Box>
                        <form onSubmit={(e) => submitEntries(e)}>
                            <FormControl
                                as="fieldset"
                                isRequired
                                marginTop="2em"
                            >
                                <FormLabel as="legend" fontWeight="bold">
                                    Select Blockchain
                                </FormLabel>
                                <Box w="50%">
                                    <Select
                                        value={usedBlockchain}
                                        onChange={(event) =>
                                            setUsedBlockchain(
                                                event.target.value
                                            )
                                        }
                                    >
                                        <option value="CI">
                                            Copyright Infrastructure
                                        </option>
                                        <option value="BX">Bloxberg</option>
                                        <option value="BC">Bitcoin</option>
                                        <option value="ET">Ethereum</option>
                                    </Select>
                                </Box>
                            </FormControl>
                            {usedBlockchain ? (
                                <FormControl
                                    as="fieldset"
                                    isRequired
                                    marginTop="1em"
                                >
                                    <FormLabel as="legend" fontWeight="bold">
                                        Select Publisher Address
                                    </FormLabel>
                                    <Box w="50%">
                                        <Select
                                            value={usedPublisherAddress}
                                            onChange={(event) =>
                                                setUsedPublisherAddress(
                                                    event.target.value
                                                )
                                            }
                                        >
                                            {addressOptions()}
                                        </Select>
                                    </Box>
                                </FormControl>
                            ) : (
                                ''
                            )}
                            <Button type="submit" marginTop="1em">
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Box>
            )}
        </StyledTable>
    )
}
