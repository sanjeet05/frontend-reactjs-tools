import React, { Component, Fragment } from 'react';

class MyBase64 extends Component {
  state = {    
    items : this.props.data,
    depth: this.props.depth,    
  };

  componentWillReceiveProps(nextProps){
    if(JSON.stringify(this.props.depth) !== JSON.stringify(nextProps.depth)){
      this.setState({ depth: nextProps.depth });
    } else if(JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)){
      this.setState({ items: nextProps.data });
    }
    this.props = nextProps;
  }

  componentWillMount(){
        
  }  
    
  componentDidMount() {
    
  }
         
  render() {
    const items = this.state.items;
    
    return (
      <Fragment>
        <h2>Base64</h2>
        <div>          
          {
            items.map((thisItem, index) => {
              const text = JSON.stringify(thisItem, null, this.state.depth);
              return (
                <div key={index}>
                  {text}                       
                </div>     
              );
            })
          }    
        </div> 
      </Fragment>
    );
  }
};

export default MyBase64;