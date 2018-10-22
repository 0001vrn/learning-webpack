import './styles/index.scss';
import './styles/app.scss';

import 'bootstrap';

import _ from 'lodash';

function display()
{
    var today = new Date();
    var month = today.getMonth();
    var day = today.getDay();
    var year = today.getFullYear();

    var hour = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
    var minute = today.getMinutes();
    var seconds = today.getSeconds();
    var milliseconds = today.getMilliseconds();

    var output = month + '/' + day + '/' + year + ' - ' +
    hour + ':' + minute + ':' + seconds + ':' + milliseconds;
    
    return output;
}

function component() {
  let el = document.getElementById('my_id')
  if(el){
    el.innerHTML = _.join(['Hello', 'webpack', ' '+display()], ' ');
    return el;
  }
    let element = document.createElement('div');
    element.id = "my_id";
    element.className = "my_class";
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack', ' '+display()], ' ');
  
    return element;
  }

function render(){
  document.getElementById('main').appendChild(component());
}

setInterval(render, 10);