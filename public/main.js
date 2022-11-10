const { app , BrowserWindow } = require('electron');
require('@electron/remote/main').initialize();

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
              enableRemoteModule: true
        },
        frame:true,
    });
    win.loadURL('http://localhost:3000');
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function() {
   if (BrowserWindow.getAllWindows().length === 0) createWindow();
});



// BUTTONS 
/*var window = remote.BrowserWindow.getFocusedWindow();

var title = document.querySelector("title").innerHTML;
document.querySelector("#titleshown").innerHTML = title;

var minimize = document.querySelector("#minimize");
var maximize = document.querySelector("#maximize");
var quit = document.querySelector("#quit");

minimize.addEventListener("click", () => {
  window.minimize();
});

maximize.addEventListener("click", () => {
  window.setFullScreen(!win.isFullScreen());
});

quit.addEventListener("click", () => {
  window.close();
});
*/