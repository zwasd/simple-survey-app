import React from 'react'
import { Field, reduxForm } from 'redux-form'

import validate from './validate'
import { renderError } from './renderField'


const SurveyThirdPage = ({ prevPage, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <div className="question">
            <p className="title is-4 is-spaced">What is your date of birth?</p>
            <p className="subtitle is-5">
              Your age and the time until you retire are key factors in assessing your risk tolerance.
            </p>
            <div className="field">
                <div className="control">
                    <Field
                        component="input"
                        type="date"
                        name="birthday"
                        className="input"
                    />
                </div>
            </div>
            <Field name="birthday" component={renderError} />
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
})(SurveyThirdPage)