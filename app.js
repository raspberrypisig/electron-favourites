const { remote } = require('electron');
const storage = require('electron-json-storage')
const Vue = require('vue/dist/vue.common.js')
const ipcRenderer = require('electron').ipcRenderer
const { spawn } = require('child_process')

let vm = new Vue({
      el: '#favourites-table',
    data: function() {
      return {
       favourites: {
         favourites:[]
       }
      }
    }
    
})


function refreshFavourites() {
storage.get('data', (error, data)=>{
  if (error) throw error;

  let newdata

  if (data) {
    newdata = data['data']
  }


  Vue.set(vm.favourites,'favourites', newdata)
/*
  new Vue({
    el: '#favourites-table',
    data: {
      'favourites': newdata
    }
})
*/

})

}

function openApp(index) {
  const favourite = vm.favourites.favourites[index];
  console.log(favourite)
  filename = favourite.filename
  openwith =  favourite.openwith
  spawn(openwith, [filename])
}


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
  //win.webContents.openDevTools()
}

ipcRenderer.on('updateFavourites', function(event) {
  refreshFavourites()
}) 

refreshFavourites()

