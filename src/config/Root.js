import React from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';

// redux imports start
import { Provider } from "react-redux";
import store from "../redux/store.js";

import App from '../containers/App';

// Screens
// for home
import TaskOne from '../containers/Screens/TaskOne/TaskOne';
import TaskTwo from '../containers/Screens/TaskTwo/TaskTwo';

import TextGenerator from '../containers/TextGenerator/TextGenerator';
import Weather from '../containers/Weather/Weather';

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>                
          {/* MainLayout */}
          <App>
            {/* home */}
            <Route exact path="/" component={TaskOne} />
            <Route exact path="/task_one" component={TaskOne} />
            <Route exact path="/task_two" component={TaskTwo} />
            <Route exact path="/text_generator" component={TextGenerator} />  
            <Route exact path="/weather" component={Weather} />           
          </App>
        </Switch>
      </Router>
    </Provider>  
  );
};

export default Root;

