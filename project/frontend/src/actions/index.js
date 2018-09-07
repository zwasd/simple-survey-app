import axios from 'axios'
import { removeState } from '../store/localStorage'


export const GO_BACK = 'GO_BACK';
export const PREV_PAGE = 'PREV_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const RESULT_PAGE = 'RESULT_PAGE';

export const SUBMIT_SURVEY_SUCCESS = 'SUBMIT_SURVEY_SUCCESS';
export const SUBMIT_SURVEY_FAILURE = 'SUBMIT_SURVEY_FAILURE';

// survey result api
const API_URL = '/api/results/'


/* 
 * survey page actions 
 */
export const GoBack = () => ({
    type: GO_BACK
})

export const PrevPage = () => ({
    type: PREV_PAGE
})

export const NextPage = () => ({
    type: NEXT_PAGE
})

export const ResultPage = () => ({
    type: RESULT_PAGE
})


/*
 * survey submission actions 
 */
// handle submit survey to api
export const SubmitSurvey = survey => dispatch => {
    const headers = {"Content-Type": "application/json"}
    return axios.post(API_URL+'add/', survey, headers)
        .then(response => {
            dispatch(SubmitSurveySuccess(response))
        })
        .catch(err => {
            dispatch(SubmitSurveyFailure(err))
            throw(err)
        })
}

const SubmitSurveySuccess = response => {
    removeState()
    window.alert("The survey has been successfully submitted!")
    window.location.replace("/")
    return {
        type: SUBMIT_SURVEY_SUCCESS,
        payload: {
            response
        }
    }
}

const SubmitSurveyFailure = err => {
    alert("Something went wrong when submitting the survey.\nPlease try again.")
    return {
        type: SUBMIT_SURVEY_FAILURE,
        payload: {
            err
        }
    }
}
