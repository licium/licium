import React, { useContext, useState } from 'react'
import './Registration.scss'
import { ISCCContext } from '../../App'
import styled from '@emotion/styled'
import { FaQrcode } from 'react-icons/all'
import { Button, FormControl, FormLabel, Select } from '@chakra-ui/core'
import Box from '@chakra-ui/core/dist/Box'
import { useHistory } from 'react-router-dom'

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
    const [usedPublisherAddress, setUsedPublisherAddress] = useState()
    const history = useHistory()

    const Styled = styled.div`
        margin: 1em;
        table {
            width: 100%;
            td {
                border: 1px solid;
                padding: 1em;
            }
        }
    `

    const cells = () =>
        selectedEntries.map((iscc, id) => (
            <tr key={id}>
                <td>{iscc.title}</td>
                <td>{iscc.extra}</td>
                <td>-</td>
                <td>iscc.date</td>
                <td>
                    <FaQrcode />
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
        <Styled>
            {selectedEntries.length === 0 ? (
                <span>No entries selected</span>
            ) : (
                <Box>
                    <table>
                        <thead>
                            <tr>
                                <td>Filename</td>
                                <td>Embedded Title</td>
                                <td>#Tag</td>
                                <td>Date</td>
                                <td>ISCC</td>
                            </tr>
                        </thead>
                        <tbody>{cells()}</tbody>
                    </table>
                    <form onSubmit={(e) => submitEntries(e)}>
                        <FormControl as="fieldset" isRequired>
                            <FormLabel as="legend">Select Blockain</FormLabel>
                            <Select
                                value={usedBlockchain}
                                onChange={(event) =>
                                    setUsedBlockchain(event.target.value)
                                }
                            >
                                <option value="CI">
                                    Copyright Infrastructure
                                </option>
                                <option value="BX">Bloxberg</option>
                                <option value="BC">Bitcoin</option>
                                <option value="ET">Ethereum</option>
                            </Select>
                        </FormControl>
                        {usedBlockchain ? (
                            <FormControl as="fieldset" isRequired>
                                <FormLabel as="legend">
                                    Select Publisher Address
                                </FormLabel>
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
                            </FormControl>
                        ) : (
                            ''
                        )}
                        <Button type="submit">Submit</Button>
                    </form>
                </Box>
            )}
        </Styled>
    )
}
