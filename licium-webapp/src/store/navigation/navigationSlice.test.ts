import { store } from '../store'
import { goToSection, NavSection, selectNavSection } from './navigationSlice'

describe('navigation', () => {
  it('should initially be on id', () => {
    const selection = selectNavSection(store.getState())

    expect(selection).toBe('id')
  })

  test.each(['id', 'reg', 'cert', 'veri'])(
    'should be able to navigate to %s',
    (target) => {
      store.dispatch(goToSection(target as NavSection))

      const selection = selectNavSection(store.getState())

      expect(selection).toBe(target)
    }
  )
})
