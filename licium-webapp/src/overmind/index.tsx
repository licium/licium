import { namespaced } from 'overmind/config'
import * as isccs from './isccs'
import {
    createActionsHook,
    createEffectsHook,
    createReactionHook,
    createStateHook,
} from 'overmind-react'
import { IConfig } from 'overmind'

export const config = namespaced({
    isccs,
})

declare module 'overmind' {
    interface Config extends IConfig<typeof config> {}
}

export const useState = createStateHook<typeof config>()
export const useActions = createActionsHook<typeof config>()
export const useEffects = createEffectsHook<typeof config>()
export const useReaction = createReactionHook<typeof config>()
