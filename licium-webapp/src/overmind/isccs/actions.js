export const loadIsccs = ({ effects, state }) => {
    state.isccs = effects.isccs.loadIsccsFromLocalstorage()
}
