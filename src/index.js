import './style.css';
import { testFunction } from './addproject';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "sup!";
    element.classList.add('hello');
  
    return element;
  }
  
  document.body.appendChild(component());

  testFunction();