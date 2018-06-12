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
import { getTaskOneData } from "../../../redux/actions/TaskOne/taskOneAction";

import MyImage from './MyImage';

// import css
import "./TaskOne.css";


class TaskOne extends Component {
  state = {
    fetching: true,
    items : [],    
  };

  componentWillMount(){
    // const items = [
    //   {
    //     name: 'Image 1',
    //     url: 'https://source.unsplash.com/random/950x550',
    //   },
    //   {
    //     name: 'Image 2',
    //     url: 'https://source.unsplash.com/random/150x150',
    //   },
    //   {
    //     name: 'Image 3',
    //     url: 'https://source.unsplash.com/random/250x200',
    //   }
    // ];
    
    // this.setState({items});
    
  }  
    
  componentDidMount() {
    this.props.getTaskOneData();
  } 

       
  render() {
    const fetching = this.props.taskOne.fetching;
        
    const loader = <div className="loader">Loading ...</div>;
         
    return (
      <Fragment>
        <Grid>       
          <Row>         
            <Col sm={12} md={12} >
              <div className="task_title">Welcome to Task One</div>
            </Col>
          </Row>

          <div className="divider"></div>

          <Row className="">
            <Col sm={12} md={12}>
            {
              (() => {
                if (fetching) {
                  return loader;
                } else {
                  return (
                      this.props.taskOne.data.map((thisItem, index) => {
                        return (
                          <div className="img_item" key={index}>
                            <MyImage url={thisItem.url}  width="800" height="500"/>
                          </div>     
                        );
                      })
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
    taskOne: store.taskOneReducer,
  };
};

const mapDispatchToProps = {
  getTaskOneData
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskOne);

