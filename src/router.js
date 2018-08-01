import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Main from './pages/Main/main';
import Home from './pages/Home/home';
import Film from './pages/Film/film';
import NowShowing from './pages/Film/component/nowShowing';
import AfterShowing from './pages/Film/component/afterShowing';
import FilmDetail from './pages/Film/component/filmDetail';
const router = (
  <Router>
    <Main>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/films" render={()=>
          <Film>
            <Switch>
              <Route path="/films/now-showing" component={NowShowing}/>
              <Route path="/films/after-showing" component={AfterShowing}/>
              <Redirect from="/films" to="/films/now-showing" />      
            </Switch>
          </Film>
        }>
        </Route>
        <Route path="/detail/:filmId" render={(props)=>
          <FilmDetail {...props} />
        } >
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </Main>
  </Router>
) 

export default router; 