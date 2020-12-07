import {NavBar} from "./components/NavBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Alert from "./components/Alert";
import {AlertProvider} from "./context/alert/AlertProvider";
import GithubProvider from "./context/github/GithubProvider";

function App() {
    return (
        <GithubProvider>
            <AlertProvider>
                <BrowserRouter>
                    <NavBar/>
                    <div className={`container pt-4`}>
                        <Alert/>
                        <Switch>
                            <Route path={`/`} exact component={Home}/>
                            <Route path={`/about`} component={About}/>
                            <Route path={`/profile/:name`} component={Profile}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertProvider>
        </GithubProvider>
    );
}

export default App;

