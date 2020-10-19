import { namespaced } from 'overmind/config'
import * as isccs from './isccs'
import * as blockchain from './blockchain'
import {
    createActionsHook,
    createEffectsHook,
    createReactionHook,
    createStateHook,
} from 'overmind-react'
import { IConfig } from 'overmind'

export const config = namespaced({
    blockchain,
    isccs,
})

declare module 'overmind' {
    interface Config extends IConfig<typeof config> {}
}

export const useState = createStateHook<typeof config>()
export const useActions = createActionsHook<typeof config>()
export const useEffects = createEffectsHook<typeof config>()
export const useReaction = createReactionHook<typeof config>()
