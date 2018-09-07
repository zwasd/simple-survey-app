import React from 'react'
import { Field, reduxForm } from 'redux-form'

import validate from './validate'
import { renderError } from './renderField'


const SurveyFifthPage = ({ handleSubmit, prevPage }) => (
    <form onSubmit={handleSubmit}>
        <div className="question">
            <p className="title is-4">What is your email?</p>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <Field
                        component="input" 
                        type="email"
                        name="email"
                        className="input"
                        placeholder="Email"
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                </p>
            </div>
            <Field name="email" component={renderError} />
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
})(SurveyFifthPage)