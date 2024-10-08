// script.js

// Funktion, um den Modus basierend auf dem gespeicherten Wert einzustellen
function setMode() {
    const body = document.body;
    const modeSwitch = document.getElementById('modeSwitch');

    // Überprüfe den gespeicherten Modus
    const mode = localStorage.getItem('mode');
    if (mode === 'light') {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        modeSwitch.checked = true; // Schalte den Switch ein
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeSwitch.checked = false; // Schalte den Switch aus
    }
}

// Setze den Modus beim Laden der Seite
setMode();

// Event Listener für den Switch
document.getElementById('modeSwitch').addEventListener('change', function() {
    const body = document.body;
    if (this.checked) {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        localStorage.setItem('mode', 'light'); // Speichere den Modus
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark'); // Speichere den Modus
    }
});
