import '@fortawesome/fontawesome-free/css/all.min.css'
import { StoryFn } from '@storybook/addons'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Provider } from 'react-redux'
import { goToSection } from '../../store/navigation/navigationSlice'
import { store } from '../../store/store'
import { NavBar } from './ContentNavbar'

const withProvider = (story: StoryFn<any>) => (
  <Provider store={store}>{story()}</Provider>
)

export default {
  title: 'Navbar',
  component: NavBar,
  decorators: [withProvider],
}
export const Default = () => <NavBar></NavBar>
export const IdentificationSelected = () => {
  store.dispatch(goToSection('id'))
  return <NavBar></NavBar>
}
export const RegistrationSelected = () => {
  store.dispatch(goToSection('reg'))
  return <NavBar></NavBar>
}
export const CertificationSelected = () => {
  store.dispatch(goToSection('cert'))
  return <NavBar></NavBar>
}
export const VerificationSelected = () => {
  store.dispatch(goToSection('veri'))
  return <NavBar></NavBar>
}
