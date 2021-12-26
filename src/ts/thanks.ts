import '../scss/thanks.scss';
import './modals';
import './year';

const nameLabelEl = document.querySelector('.js-name') as HTMLSpanElement;
nameLabelEl.textContent = localStorage.getItem('userName') || 'Гость';
