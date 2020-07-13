import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShowBooks from "./components/ShowBooks";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ShowBooks} />
                <ShowBooks />
            </Switch>
        </Router>
    );
}

export default App;
