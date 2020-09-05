import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Nomatch from './components/NoMatch/Nomatch';
import PostDetail from './components/PostDetail/PostDetail';
import Comments from './components/Comments/Comments';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/post/:postDet">
                     <PostDetail></PostDetail>
                </Route>
                <Route path="/post/:comments">
                     <Comments></Comments>
                </Route>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="*">
                    <Nomatch></Nomatch>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
