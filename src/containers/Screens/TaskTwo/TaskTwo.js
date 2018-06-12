import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { 
  Grid, 
  Row, 
  Col,    
  Button,
} from 'react-bootstrap';

// redex imports
import { connect } from "react-redux";
import { bindActionCreators } from "redux"; 
import { getTaskTwoData } from "../../../redux/actions/TaskTwo/taskTwoAction";

import MyText from './MyText'; 
import MyBase64 from './MyBase64';

// import css
import "./TaskTwo.css";


class TaskTwo extends Component {
  state = {
    fetching: true,
    items : [],
    depth: '',    
  };
  
  componentWillMount(){
        
  }  
    
  componentDidMount() {
    this.props.getTaskTwoData();
  } 

  handleUserInput = (e) => {    
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  handleFetch = (e) => {    
    this.props.getTaskTwoData();
  }  
         
  render() {
    const fetching = this.props.taskTwo.fetching;
        
    const loader = <div className="loader">Loading ...</div>;
         
    return (
      <Fragment>
        <Grid>       
          <Row>         
            <Col sm={12} md={12} >
              <div className="task_title">Welcome to Task Two</div>
            </Col>
          </Row>

          <div className="divider"></div>

          <Row>         
            <Col sm={12} md={12} >
              <div className="form-inline" style={{padding: '10px'}}>
                <div className="form-group">
                  <input 
                    type="text"
                    name="depth"
                    placeholder="depth"
                    className="form-control"
                    value={this.state.depth} 
                    onChange={this.handleUserInput}                                 
                  />
                </div>

                <div className="form-group" style={{float: 'right'}}>
                  <Button                    
                    className="form-control"
                    bsStyle="primary"
                    onClick={this.handleFetch}
                    >
                    Fetch
                  </Button>
                </div>

              </div>    
            </Col>
          </Row> 

          <div className="divider"></div>         

          <Row>
            <Col sm={12} md={12}>
            {
              (() => {
                if (fetching) {
                  return loader;
                } else {
                  const task = this.props.taskTwo.data;                  
                  return (
                    <Row>
                      <Col sm={12} md={6}>
                        <MyText data={task} depth={this.state.depth} />
                      </Col>
                      <Col sm={12} md={6}>
                        <MyBase64 data={task} depth={this.state.depth} /> 
                      </Col>
                    </Row>
                    
                  );
                }
              })()
            }
            </Col>        
          </Row>  
                           
        </Grid>        
      </Fragment>
    );
  }
};

const mapStateToProps = (store) => {
  return {
    taskTwo: store.taskTwoReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getTaskTwoData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskTwo);

