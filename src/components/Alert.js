import React from 'react';
import {AlertContext} from "../context/alert/AlertContext";
import {useContext} from "react";

function Alert() {
    const {alert, hide} = useContext(AlertContext);

    return (alert &&
        <div
            className={`alert alert-${alert.type || `secondary`} alert-dismissible`}
            role="alert">
            <strong>{alert.text}</strong>
            <button type="button" className="close" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

export default Alert;
