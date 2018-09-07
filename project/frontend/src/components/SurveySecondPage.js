import React from 'react'
import { Field, reduxForm } from 'redux-form'

import validate from './validate'
import { renderOptionField } from './renderField'


// survey answer options
const items = [
    "I'd like to create a diversified investment portfolio",
    "I'd like to save money on my taxes",
    "I'd like someone to completely manage my investments, so that I don't have to",
    "I'd like to match or beat the performance of the markets"
]

const SurveySecondPage = ({ handleSubmit, prevPage }) => (
    <form onSubmit={handleSubmit}>
        <div className="question">
            <p className="title is-4">What are you looking for in a financial advisor?</p>
            {items.map((item, id) => (
                <Field 
                    key={id}
                    component={renderOptionField}
                    type="checkbox"
                    name={`lookingFor[${item}]`}
                    value={item}
                    label={item}
                />
            ))}
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
})(SurveySecondPage)