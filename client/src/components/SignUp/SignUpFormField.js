import React from 'react';

const SignUpFormField = ({ input, id, noValueError, meta: { error, touched } }) => {
    return (
        <div className="form-group">
            <input { ...input } className="form-control form-control-user" id={ id } placeholder={ noValueError } />
            <small style={ { color: 'red' } } className="form-text">{ touched && error }</small>
        </div>
    );
};

export default SignUpFormField;