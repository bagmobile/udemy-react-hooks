import React from 'react';
import {Link} from "react-router-dom";

function Card({user}) {

    return (
        <div className="card">
            <img src={user.avatar_url} alt={user.login} className="card-img-top"/>
            <div className="card-body">
                <div className="card-title">
                    <h5>{user.login}</h5>
                    <Link to={`/profile/${user.login}`} className="btn btn-primary">Open</Link>
                </div>
            </div>

        </div>
    );
}

export default Card;
