import React from 'react'
import URLUpload, { URLUploadIds } from './URLUpload'
import { mount, shallow } from 'enzyme'

describe('URLUpload', () => {
    it('requires input', () => {
        const wrapper = shallow(<URLUpload handleSubmit={() => {}} />)
        const input = wrapper.find(`#${URLUploadIds.inputField}`)

        expect(input.props().required)
    })

    it('shows an error when url is invalid', () => {
        const wrapper = shallow(
            <URLUpload handleSubmit={() => {}} isUrlInvalid={true} />
        )
        const errorParagraph = wrapper.find('p')

        expect(errorParagraph.text()).toEqual('This URL does not work')
    })

    it('disables submit button if no url is entered', () => {
        const wrapper = shallow(<URLUpload handleSubmit={() => {}} />)

        const submitInput = wrapper.find(`#${URLUploadIds.submitButton}`)

        expect(submitInput.props().disabled).toBeTruthy()
    })

    it('enables submit button if url is entered', () => {
        const wrapper = mount(<URLUpload handleSubmit={() => {}} />)

        const textInput = wrapper.find(`#${URLUploadIds.inputField}`)
        textInput.simulate('change', {
            target: {
                value: 'https://someUrl',
            },
        })
        const submitButton = wrapper.find(`#${URLUploadIds.submitButton}`)

        expect(submitButton.props().disabled).toBeFalsy()
    })

    it('can be disabled', () => {
        const wrapper = shallow(
            <URLUpload handleSubmit={() => {}} disabled={true} />
        )

        const textInput = wrapper.find(`#${URLUploadIds.inputField}`)
        const submitInput = wrapper.find(`#${URLUploadIds.submitButton}`)

        expect(textInput.props().disabled).toBeTruthy()
        expect(submitInput.props().disabled).toBeTruthy()
    })

    it('returns the value from the input field', () => {
        const inputString = 'https://www.google.com'
        const handleSubmit = jest
            .fn()
            .mockImplementation((callBack) => () => callBack(inputString))
        const preventDefault = jest.fn()

        const wrapper = shallow(<URLUpload handleSubmit={handleSubmit} />)
        wrapper.find(`#${URLUploadIds.inputField}`).simulate('change', {
            target: { value: inputString },
        })
        wrapper.find('form').simulate('submit', {
            preventDefault,
        })

        expect(preventDefault).toBeCalledTimes(1)
        expect(handleSubmit).toBeCalledWith(inputString)
    })
})
