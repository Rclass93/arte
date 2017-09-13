/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
// import { Panel, Input, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import { FormControl, Checkbox } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import history from '../../core/history';

export default class Login extends React.Component{
  constructor (props){
    super(props);
    this.state={
      username: "",
      password: ""
    }
  }

  handleClick(e) {
    var formData = new FormData();
    formData.append('username', this.state.username);
    formData.append('password', this.state.password);
    
    fetch('https://apiclinica.webcallback.pt/api-token-auth',{
      method:'POST',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: formData
    }).then(
      function(response){ 
        console.log(response);
        if(response != null){
          console.log("RESPOSTA ENVIADA");
        }
      }
    ).catch(
      function(error){
        console.log(error);
      }
    );

  }
  
  render(){
    return(
      <div className="col-md-4 col-md-offset-4">
        <div className="text-center">
          <h1 className="login-brand-text">ClinicsLab</h1>
        </div>
        <Panel header={<h3>Sign in</h3>} className="login-panel">
          <form role="form">
            <fieldset>
              <div className="form-group">
                <FormControl
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  onChange={(e, newValue) => this.setState({username: newValue})}
                />
              </div>
              <div className="form-group">
                <FormControl
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  onChange={(e, newValue) => this.setState({password: newValue})}
                />
              </div>
              <Button  
                bsSize="large" 
                bsStyle="success" 
                onClick={(e) => this.handleClick(e)}
                block>Entrar</Button>
            </fieldset>
          </form>
        </Panel>
    </div>
    );
  }
}
/*  componentDidMount(){
    
    var formData = new FormData();
    formData.append('username', 'demo');
    formData.append('password', '#Demo123');
    
    fetch('https://apiclinica.webcallback.pt/api-token-auth',{
      method:'POST',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: formData
    }).then(
      function(res){ 
        e.preventDefault();
        history.push('/home');
      }
    );

  }

}

const title = 'Log In';

function submitHandler(e) {
  //e.preventDefault();
  //history.push('/home');
  <ValidadeLogin />
}

function Login(props, context) {
  context.setTitle(title);
  return (
    <div className="col-md-4 col-md-offset-4">
      <div className="text-center">
        <h1 className="login-brand-text">ClinicsLab</h1>
      </div>

      <Panel header={<h3>Autentique-se</h3>} className="login-panel">

        <form role="form" onSubmit={(e) => { submitHandler(e); }}>
          <fieldset>
            <div className="form-group">
              <FormControl
                type="text"
                className="form-control"
                placeholder="Username"
                name="name"
              />
            </div>

            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Password"
                type="password"
                name="password"
              />
            </div>
            <Button type="submit" bsSize="large" bsStyle="success" block>Entrar</Button>
          </fieldset>
        </form>

      </Panel>

    </div>

  );
}

Login.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Login);*/