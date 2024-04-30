const express = require('express');
const fs = require('node:fs');
const path = require('node:path');
const tarefasRoutes = require('./routes/tarefaRoutes');
const userRoutes = require('./routes/usersRoutes');
const bd = require('./util/database');
const app = express();
const port = 3030;
const todoFilesPath = path.join(__dirname,'taskServer.json');

/* if(!fs.existsSync(todoFilesPath)){
    fs.writeFileSync(todoFilesPath,'[]');
} */

app.use(express.json());

app.use('/tarefas', tarefasRoutes);
app.use('/users', userRoutes);

bd
.authenticate()
.then(() => {
    console.log('conexao a BD sucesso!');
})
.catch((erro) => {
    console.log(erro);
});

bd
.sync()
.then(() => {
    console.log('Sincronizado');
})
.catch( (error) => {
    console.log(error);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    });

