import React from 'react'
import { connect } from 'react-redux'

import * as Actions from '../actions'
import SurveyFirstPage from './SurveyFirstPage'
import SurveySecondPage from './SurveySecondPage'
import SurveyThirdPage from './SurveyThirdPage'
import SurveyFourthPage from './SurveyFourthPage'
import SurveyFifthPage from './SurveyFifthPage'
import ResultPage from './ResultPage'


// survey pages
const pages = {
    1: SurveyFirstPage,
    2: SurveySecondPage,
    3: SurveyThirdPage,
    4: SurveyFourthPage,
    5: SurveyFifthPage
}

const SurveyForm = props => {
    const SurveyPage = pages[props.currentPage]

    return (
        <div class="columns is-mobile">
            <div class="column is-three-fifths is-offset-one-fifth">
            {
                props.showResult ?
                <ResultPage 
                    goBack={props.goBack}
                /> :
                <SurveyPage 
                    prevPage={props.currentPage !== 1 ? props.prevPage : ''}
                    onSubmit={props.currentPage !== 5 ? props.nextPage : props.resultPage}
                />
            }
            </div>
        </div>
    )
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    goBack: () => dispatch(Actions.GoBack()),
    prevPage: () => dispatch(Actions.PrevPage()),
    nextPage: () => dispatch(Actions.NextPage()),
    resultPage: () => dispatch(Actions.ResultPage())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SurveyForm)
