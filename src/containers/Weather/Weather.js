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
import { getWeatherData } from "../../redux/actions/Weather/weatherAction";

import axios from 'axios';

// import css
import "./Weather.css";


class Weather extends Component {
  state = {
    city: 'Bengaluru',    
    region: 'IN',
  };

  componentWillMount(){
        
  }  
    
  componentDidMount() {    
    axios({
      method: 'get',
      url: 'https://api.ipdata.co',
    }).then ( results => {
      // console.log('results', results)
      const { city, region, country_code } = results.data;
      const reqObj = {
        city,
        region,
        country_code
      };      
      this.props.getWeatherData(reqObj);
    });     
    
  };

         
  render() {
    const fetching = this.props.weather.fetching;
        
    const loader = <div className="loader">Loading ...</div>;
         
    return (
      <Fragment>
        <Grid>       
          <Row>         
            <Col sm={12} md={12} >
              <div className="task_title">Get Weather</div>
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
                  const data = this.props.weather.data;
                  return (
                    <div style={{textAlign: 'center'}}>  
                      <div> Temp: {data.main.temp} &deg;C</div>
                      <div> City: {data.name} </div>
                      <div> Country: {data.sys.country} </div>
                      <div> Humidity: {data.main.humidity} %</div>
                      <div> Pressure: {data.main.pressure} inHg</div>                      	
                      <div> Wind: {data.wind.speed} mph</div>
                      <div> Description: {data.weather[0].description} </div>
                    </div>
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
    weather: store.weatherReducer,
  };
};

const mapDispatchToProps = {
  getWeatherData
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

