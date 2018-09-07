import React from 'react'
import { Field, reduxForm } from 'redux-form'

import validate from './validate'
import { renderError } from './renderField'


const SurveyFourthPage = ({ prevPage, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <div className="question">
            <p className="title is-4">What is your annual pre-tax income?</p>
            <div className="field has-addons">
                <p className="control">
                    <a className="button is-static">
                        $
                    </a>
                </p>
                <p className="control is-expanded">
                    <Field
                        component="input"
                        type="number"
                        name="pretaxIncome"
                        className="input"
                    />
                </p>
            </div>
            <Field name="pretaxIncome" component={renderError} />
        </div>
        <div className="button-group field is-grouped is-grouped-left">
            <p className="control">
                <button className="button is-light" onClick={prevPage}>
                Back
                </button>
            </p>
            <p className="control">
                <button type="submit" className="button is-primary">
                Continue
                </button>
            </p>
        </div>
    </form>
)

export default reduxForm({
    form: 'survey',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SurveyFourthPage)