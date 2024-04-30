const fs = require('node:fs');

const read = (todoFilesPath) => {
    try {
        const data = fs.readFileSync(todoFilesPath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Erro ao carregar tarefas:', err);
        return [];
    }
}

const write = (todoFilesPath, tasks) => {
    fs.writeFileSync(todoFilesPath,JSON.stringify(tasks));
}

module.exports = {
    read,
    write
}