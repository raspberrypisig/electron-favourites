const { remote } = require('electron');

function openModal() {
  let win = new remote.BrowserWindow({
    parent: remote.getCurrentWindow(),
    modal: true,
    width: 1000, 
    height: 450,
    minimizable: false,
    maximizable: false,
    skipTaskbar: true,
    autoHideMenuBar: true,
    title: 'Add Favourite'
  })

  var newfavourite = 'file://' + __dirname + '/newfavourite.html'
  win.loadURL(newfavourite);
  win.webContents.openDevTools()
}