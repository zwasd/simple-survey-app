import React from 'react'
import { Field, reduxForm } from 'redux-form'

import validate from './validate'
import { renderOptionField, renderError } from './renderField'


// survey answer options
const items = [
    "General savings",
    "Retirement",
    "College Savings",
    "Other"
]

const SurveyFirstPage = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <div className="question">
            <p className="title is-4">What is your primary reason for investing?</p>
            {items.map((item, id) => (
                <Field 
                    key={id}
                    component={renderOptionField}
                    type="radio"
                    name="investReason"
                    value={item}
                    label={item}
                />
            ))}
            <Field name="investReason" component={renderError} />
        </div>
        <div className="button-group field is-grouped is-grouped-left">
            <p className="control">
                <a href="/" className="button is-light">
                Back
                </a>
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
})(SurveyFirstPage)