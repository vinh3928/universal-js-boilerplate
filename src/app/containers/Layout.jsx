import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterAction from '../actions/counter';

export default class Layout extends Component {
 render() {
   return (
     <Connector select={state => ({ counter: state.counter })}>
       {this.renderChild}
     </Connector>
   );
 }

 renderChild({ counter, dispatch }) {
   const actions = bindActionCreators(CounterAction, dispatch);
   return (
     <html lang='en'>
       <head>
         <meta charSet='utf-8' />
         <meta httpEquiv='x-ua-compatible' content='ie=edge' />
         <title>{ this.props.title }</title>
         <meta name='description' content='' />
         <meta name='viewport' content='width=device-width, initial-scale=1' />
         <link rel='stylesheet' href='/app.css' type='text/css' />
         <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
       </head>
       <body>
           <Counter counter={counter} actions={actions} />
         <script src='/app.js'></script>
       </body>
     </html>
   );
 }
}
