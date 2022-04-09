const {app, BrowserWindow} = require('electron');

let window;

const createWindow = async () =>{
    window = new BrowserWindow({
        width:1200,
        height:600
    })
    window.setMenu(null)
    await window.loadURL("http://localhost:3000/")
    window.on('closed',()=> window=null)
}

app.on('ready', createWindow)

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', async ()=>{
    if(window === null){
        await createWindow()
    }
})
