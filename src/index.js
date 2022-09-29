import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

function reg() {
    console.log('Müködik');
}

console.log('Loaded');
document.getElementById('gomb').addEventListener('click',reg);