import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

function reg() {
    let hossz = document.getElementById('username').value;
    let jelszo1 = document.getElementById('password1').value;
    let jelszo2 = document.getElementById('password2').value;

    if ( hossz.length >= 3) {        
        document.getElementById('username').value.toLowerCase();
    } else{
        window.alert('Nem elég hosszú!');
    }
    if (document.getElementById('beemail').value.includes('@')) {
    }else{
        window.alert('Az email nem tartalmaz @-ot.');
    }    
    if (jelszo1.length >= 8 && jelszo2.length >= 8) {
        console.log('Megvan a minimum 8 karakter');
    }else{
        window.alert('Valamelyik jelszó nem elég hosszú.');
    }
    

}

console.log('Loaded');
document.getElementById('gomb').addEventListener('click',reg);