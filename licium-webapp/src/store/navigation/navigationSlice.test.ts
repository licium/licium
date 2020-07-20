import { store } from '../store'
import { selectNavSection, goToSection, NavSection } from './navigationSlice'
import { useSelector } from 'react-redux'

describe('navigation', () => {
  let storeUnderTest

  beforeEach(() => {
    storeUnderTest = store
  })

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
