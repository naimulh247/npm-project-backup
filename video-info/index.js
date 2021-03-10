const electron = require('electron');
const {app, BrowserWindow} = electron;

app.on('ready', () =>{
    console.log('App is now Ready');

    console.log('Creating a new browser window');
    const mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/index.html`);

});