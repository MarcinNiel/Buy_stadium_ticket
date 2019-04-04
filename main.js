// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain} = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let recordWindow;
let gameWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 940,
        webPreferences: {
            nodeIntegration: true
        }
    });
    
	Window = recordWindow = mainWindow;
    mainWindow.loadFile('index.html');
    mainWindow.on('closed', function () {
        app.quit()
    })
}
function createGameWindow() {
    mainWindow.loadFile('project.html');
    mainWindow.on('closed', function () {
        app.quit()

    })
}
function createRecordListWindow() {
    mainWindow.loadFile('recordList.html');
    mainWindow.on('closed', function () {
        app.quit()
    })
}
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});

ipcMain.on('btn:exit', function () {
    app.quit();
});
ipcMain.on('btn:exit:menu', function () {

    mainWindow.loadFile('index.html');
});
ipcMain.on('btn:list', function () {
    createRecordListWindow();
});

ipcMain.on('btn:start', function () {
    createGameWindow();
});

ipcMain.on('save:score', function () {

});
