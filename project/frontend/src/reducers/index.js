import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import * as Actions from '../actions'


// current page of survey
const currentPage = (state = 1, action) => {
    switch (action.type) {
        case Actions.PREV_PAGE:
            return state - 1
        case Actions.NEXT_PAGE:
            return state + 1
        default:
            return state
    }
}

// whether to show result
const showResult = (state = false, action) => {
    switch (action.type) {
        case Actions.RESULT_PAGE:
            return true
        case Actions.GO_BACK:
            return false
        default:
            return state
    }
}

const surveyReducer = combineReducers({
    showResult,
    currentPage,
    form: formReducer,
})

const rootReducer = (state, action) => {
    // reset state when survey is successfully submitted
    if (action.type === Actions.SUBMIT_SURVEY_SUCCESS) {
        state = undefined
    }
    return surveyReducer(state, action)
}

export default rootReducer
  
