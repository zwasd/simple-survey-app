import React from 'react'
import { connect } from 'react-redux'

import { SubmitSurvey } from '../actions'


const ResultPage = props => {
    const result = props.form.survey.values

    // format result so it can be sent to api
    const formatResult = () => ({
        ...result,
        pretaxIncome: parseInt(result.pretaxIncome, 10),
        lookingFor: (
            !result.lookingFor ? "" :
            JSON.stringify(Object.keys(result.lookingFor).filter((item) => result.lookingFor[item]))
        )
    })

    const submitSurvey = () => {
        props.dispatch(SubmitSurvey(formatResult()))
    }

    return (
        <div>
            <div class="question content">
                <h3>Your Answers</h3>
                <p><b>Email:</b> {result.email}</p>
                <p><b>Birthday:</b> {result.birthday}</p>
                <p><b>Annual pre-tax income:</b> ${result.pretaxIncome}</p>
                <p><b>Reason for investing:</b> {result.investReason}</p>
                <p><b>What you are looking for in a financial advisor:</b></p>
                <ul>
                {
                    'lookingFor' in result ?
                    Object.keys(result.lookingFor).map((option, index) => (
                        result.lookingFor[option] ?
                        <li key={index}>{option}</li> : ''
                    )) : ''
                }
                </ul>
            </div>
            <div className="button-group field is-grouped is-grouped-left">
                <p className="control">
                    <button className="button is-light" onClick={props.goBack}>
                    Back
                    </button>
                </p>
                <p className="control">
                    <button 
                        type="submit" 
                        className="button is-primary" 
                        onClick={submitSurvey.bind(this)}
                    >
                    Submit
                    </button>
                </p>
            </div>
        </div>
    )
}


const mapStateToProps = state => state

export default connect(
    mapStateToProps
)(ResultPage)
