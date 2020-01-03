import React from 'react';

const Error = ({ msg }) => {
    if (msg == null) {
        return null
    }
    return (
        <div className="err">
            {msg}
        </div>
    )
}

export default Error;