import React, {useContext} from 'react';
import Search from "../components/Search";
import Card from "../components/Card";
import {GitHubContext} from "../context/github/GithubContext";

function Home() {
    const {users, loading} = useContext(GitHubContext);
    return (
        <>
            <Search/>
            <div className="row">
                {loading
                    ? <p className="text-center">Loading...</p>
                    : users.map((user) =>
                        <div className="col-sm-4 mt-4" key={user.id}>
                            <Card user={user}/>
                        </div>
                    )}

            </div>
        </>
    );
}

export default Home;
