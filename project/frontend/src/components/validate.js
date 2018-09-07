const validate = values => {
    const errors = {}

    if (!values.investReason) {
        errors.investReason = 'Required'
    }

    if (!values.birthday) {
        errors.birthday = 'Required'
    }

    if (!values.pretaxIncome) {
        errors.pretaxIncome = 'Required'
    }

    if (!values.email) {
        errors.email = 'Required'
    }
    
    return errors
}
  
export default validate