import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title':"Work Example",
    'image':{
      'desc':"example screenshot of a project involving code",
      'src':"images/example5.png",
      'comment':""
    }
  },
  {
    'title':"Boilerplate Example!!!",
    'image':{
      'desc':"Serverless Portfolio",
      'src':"images/example4.png",
      'comment':""
    }
  },
  {
    'title':"Work ExampleS",
    'image':{
      'desc':"example screenshot of a project involving cats",
      'src':"images/example6.png",
      'comment':""
    }
  }
]
ReactDOM.render(<ExampleWork work={myWork}/>,document.getElementById('example-work'));
