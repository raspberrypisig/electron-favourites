const {remote} = require('electron')
const dialog = remote.dialog


function openFileDialog(filters=null, inputname) {
  const fileChosen = dialog.showOpenDialog(null,
  {
    properties: [
      "openFile"
    ],
    filters: filters
  }, function(pathnames) {
    const el = "input[name='" + inputname +"']"
    $(el).eq(0).val(pathnames[0])
  }
  )
  
  //alert('Bye')
}



function openFolderDialog() {
  const folderChosen = dialog.showOpenDialog(remote.getCurrentWindow(),
  {
    properties: [
      "openDirectory"
    ]
  }
  )
  $("input[name='file']").eq(0).val(folderChosen)
  console.log(folderChosen)
}