import '@fortawesome/fontawesome-free/css/all.min.css';
import { StoryFn } from '@storybook/addons';
import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import { goToSection } from '../../store/navigation/navigationSlice';
import { store } from '../../store/store';
import { NavBar } from "./ContentNavbar";




const withProvider = (story: StoryFn<any>) => (
    <Provider store={store}>
        {story()}
    </Provider>
)


storiesOf('Navbar', module)
    .addDecorator(withProvider)
    .add('default', () => <NavBar></NavBar>)
    .add('Identification selected', () => {
        store.dispatch(goToSection('id'))
        return <NavBar></NavBar>
    })
    .add('Registration selected', () => {
        store.dispatch(goToSection('reg'))
        return <NavBar></NavBar>
    })
    .add('Certification selected', () => {
        store.dispatch(goToSection('cert'))
        return <NavBar></NavBar>
    })
    .add('Verification selected', () => {
        store.dispatch(goToSection('veri'))
        return <NavBar></NavBar>
    })




