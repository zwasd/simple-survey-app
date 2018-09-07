import React from 'react'
import { Provider } from 'react-redux'

import SurveyForm from './SurveyForm'


const Root = ({ store }) => (
    <Provider store={store}>
        <SurveyForm />
    </Provider>
)

export default Root