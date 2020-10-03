import React, { useContext, useState } from 'react'
import { IconButton, Link, useToast } from '@chakra-ui/core'
import ISCCRegistry from '../../../assets/contracts/ISCCRegistry.json'
import { FaUpload } from 'react-icons/all'
import { ISCCContext } from '../../../contexts/ISCCContext'

const RegisteredButton = ({ iscc }) => {
    const web3 = window.web3

    const { updateIscc } = useContext(ISCCContext)

    const [isLoading, setLoading] = useState(false)
    const contract = new web3.eth.Contract(
        ISCCRegistry.abi,
        ISCCRegistry.networks['8995'].address
    )
    const toast = useToast()

    const showError = (msg) => {
        console.error(msg)
        toast({
            title: 'An error occurred.',
            description: msg,
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'top-right',
        })
    }

    const registerISCC = async () => {
        setLoading(true)
        const iscc_hex = web3.utils.hexToBytes(`0x${iscc.iscc_raw}`)
        const tophash_hex = web3.utils.hexToBytes(`0x${iscc.tophash}`)

        const contractMethod = contract.methods.declare(iscc_hex, tophash_hex)
        const account = (await window.web3.eth.getAccounts())[0]

        console.log(web3.eth.givenProvider.selectedAddress)

        try {
            const hash = await contractMethod.send({
                from: account,
            })
            const transactionLink = `https://blockexplorer.bloxberg.org/tx/${hash.transactionHash}`

            const shortCodeLink = `https://iscc.in/lookup/${iscc.iscc}/${account}`
            const response = await fetch(shortCodeLink)
            if (response.status === 200) {
                const shortcode = await response.json()
                const registrationId = shortcode.iscc_id
                updateIscc({
                    ...iscc,
                    transactionLink,
                    registrationId,
                })
            } else {
                showError('Fetching data from Metaregistry failed')
            }
        } catch (err) {
            showError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {iscc.transactionLink ? (
                <Link href={iscc.transactionLink} target="_blank">
                    <IconButton
                        size="sm"
                        variantColor="green"
                        title="Registered on blockchain"
                        icon="check"
                        aria-label="RegistrationInfo"
                    />
                </Link>
            ) : (
                <IconButton
                    onClick={() => registerISCC()}
                    isLoading={isLoading}
                    icon={FaUpload}
                    size="sm"
                    variantColor="yellow"
                    aria-label="Not registered"
                />
            )}
        </>
    )
}
export default RegisteredButton
