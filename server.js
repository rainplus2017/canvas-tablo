const { createServer } = require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');

const path = require('path');

const PORT = normalizePort(process.env.PORT || 5000);

// здесь у нас происходит импорт пакетов и определяется порт нашего сервера
const app = express();

app.disable('x-powered-by');
app.use(compression());
app.use(morgan('common'));

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const server = createServer(app);

server.listen(PORT, (err) => {
    if (err) throw err;

    console.log('server started');
});
