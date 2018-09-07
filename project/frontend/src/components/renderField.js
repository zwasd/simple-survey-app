import React from 'react'


// render radio or checkbox field
export const renderOptionField = ({ input, type, label }) => (
    <div className="field">
        <div className="control">
            <label className={type}>
                <input type={type} {...input} />
                {' '}
                {label}
            </label>
        </div>
    </div>
)

// show validation error
export const renderError = ({ meta: { touched, error } }) => (
    touched && error ? 
    (
        <div className="field">
            <div className="control">
                <p className="help is-danger">
                    <span class="icon has-text-danger">
                        <i class="fas fa-exclamation-triangle"></i>
                    </span>
                    {error}
                </p> 
            </div>
        </div>
    ) : false
)
