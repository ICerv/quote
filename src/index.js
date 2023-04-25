import './style.css';
import { Quote } from './Quote';


const appElm = document.querySelector('#app');
appElm.append(Quote({
  text: '"Věřím, že když si stanovíte cíl a usilujete o něj každý den, můžete dosáhnout téměř čehokoli."',
  author: 'Teddy Roosevelt'
}));