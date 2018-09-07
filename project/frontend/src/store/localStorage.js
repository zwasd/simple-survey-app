// load state from local storage
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('surveyState')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

// save state to local storage
export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('surveyState', serializedState)
    } catch (err) {
        console.log("Unable to save state to local storage")
    }
}

// remove state from local storage
export const removeState = () => {
    try {
        localStorage.removeItem('surveyState')
    } catch (err) {}
}