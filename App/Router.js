import React,{Component} from 'react';
import {Scene,Router,ActionConst} from 'react-native-router-flux';
import TaskBoard from './components/taskboard/TaskBoard';
import {connect} from 'react-redux';


class RouterComponent extends Component {

render() {
  return (
    <Router>
      <Scene key='root'>
        <Scene key="taskBoard" component={TaskBoard} hideNavBar={true} navTransparent="true" type={ActionConst.RESET} initial/>
      </Scene>
    </Router>
  )
}

}


export default RouterComponent;
