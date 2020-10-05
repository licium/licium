import { namespaced } from 'overmind/config'
import * as isccs from './isccs'
import {
    createActionsHook,
    createEffectsHook,
    createReactionHook,
    createStateHook,
} from 'overmind-react'

export const config = namespaced({
    isccs,
})

export const useState = createStateHook()
export const useActions = createActionsHook()
export const useEffects = createEffectsHook()
export const useReaction = createReactionHook()
