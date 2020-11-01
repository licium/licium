import { Action } from 'overmind'

export const showError: Action<Error> = ({ effects }, error) => {
    console.log(error)
    effects.common.showErrorToast(error.message)
}
