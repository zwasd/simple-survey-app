import React from 'react';
import { render } from 'react-dom'

import configureStore from './store/configureStore'
import Root from './components/Root'


const store = configureStore()

const wrapper = document.getElementById('root')

wrapper ?
render(
    <Root store={store} />,
    wrapper 
) : null
