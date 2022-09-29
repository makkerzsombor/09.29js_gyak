import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

function reg() {
    let hossz = document.getElementById('username').value.toString();
    if ( hossz.length > 3) {        
        document.getElementById('username').value.toLowerCase();
    } else {
        window.alert('Nem elég hosszú!');
    }
    
    

}

console.log('Loaded');
document.getElementById('gomb').addEventListener('click',reg);