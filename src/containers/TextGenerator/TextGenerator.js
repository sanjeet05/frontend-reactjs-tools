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
import { getTextGeneratorData } from "../../redux/actions/TextGenerator/textGeneratorAction";


// import css
import "./TextGenerator.css";


class TextGenerator extends Component {
  state = {
    paras: 4,    
    type: 'all-meat'
  };

  componentWillMount(){
        
  }  
    
  componentDidMount() {
    const { paras, type } = this.state;
    const reqObj = {
      paras,
      type
    };
    this.props.getTextGeneratorData(reqObj);
  }

  fetchData = (value) => {
    const { paras, type } = this.state;    
    if(paras) {      
      const reqObj = {
        paras,
        type
      };      
      this.props.getTextGeneratorData(reqObj);
    }    
  };

  changeParas = (event) => {    
    const value = event.target.value;
    this.setState({ paras: value }, ()=> {
      this.fetchData();
    }); 
    
  };
       
  render() {
    const fetching = this.props.textGenerator.fetching;
        
    const loader = <div className="loader">Loading ...</div>;
         
    return (
      <Fragment>
        <Grid>       
          <Row>         
            <Col sm={12} md={6} >
              <div className="task_title">Sample Text Generator</div>
            </Col>
            <Col sm={12} md={6} >
              <div className="form-group">
                <label>Paragraphs:</label>
                <input type="text" value={this.state.paras} onChange={this.changeParas} />
              </div>
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
                    this.props.textGenerator.data.map((thisItem, index) => {
                      return (
                        <div className="well output" key={index}>
                          <p> {thisItem} </p>
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
    textGenerator: store.textGeneratorReducer,
  };
};

const mapDispatchToProps = {
  getTextGeneratorData
};

export default connect(mapStateToProps, mapDispatchToProps)(TextGenerator);

