import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/alert/AlertContext";
import {GitHubContext} from "../context/github/GithubContext";

function Search() {
    const [value, setValue] = useState(``);
    const alert = useContext(AlertContext);
    const github = useContext(GitHubContext);

    const onSubmit = event => {
        if (event.key !== `Enter`) {
            return;
        }

        github.clearUsers();

        if (value.trim()) {
            alert.hide();
            github.search(value.trim());
        } else {
            alert.show(`Enter nick name`, `danger`);
        }
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Enter nick name..."
                value={value}
                onKeyPress={onSubmit}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    );
}

export default Search;
