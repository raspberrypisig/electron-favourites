const { remote } = require('electron');
const storage = require('electron-json-storage')
const Vue = require('vue/dist/vue.common.js')

storage.get('data', (error, data)=>{
  if (error) throw error;

  let newdata

  if (data) {
    newdata = data['data']
  }

  new Vue({
    el: '#favourites-table',
    data: {
      'favourites': newdata
    }
})

})



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