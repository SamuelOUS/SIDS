const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadURL('http://localhost:3000');

  mainWindow.webContents.on('context-menu', (e, params) => {
    const menuTemplate = [
      {
        label: 'Abrir herramientas de desarrollador',
        click: () => {
          mainWindow.webContents.openDevTools();
        }
      },
      {
        label: 'matar a dakar',
        click: () => {
          // Acción a realizar cuando se selecciona esta opción
        }
      },
      {
        type: 'separator' // Separador visual entre las opciones del menú
      },
      {
        label: 'Salir',
        click: () => {
          app.quit();
        }
      }
    ];

    const menu = Menu.buildFromTemplate(menuTemplate);
    menu.popup({ window: mainWindow });
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
