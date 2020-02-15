import React from 'react';

const SignInFormField = ({ input, label, meta: { error, touched } }) => {
    return (
        <div className="form-group">
            <label>{ label }</label>
            <input { ...input } className="form-control" />
            <small className="form-text text-muted">{ touched && error }</small>
        </div>
    );
};

export default SignInFormField;