const fs = require('node:fs');
const path = require('node:path')
const {read, write} = require('./metd')

const todoFilesPath = path.join(__dirname,'task.json')

if(!fs.existsSync(todoFilesPath)){
    fs.writeFileSync(todoFilesPath,'[]');
}

const add = (task) =>{
    const tasks = read(todoFilesPath);
    tasks.push(task);
    write(todoFilesPath, tasks);
};

const remove = (index)=>{
    const tasks = read(todoFilesPath);
    tasks.splice(index - 1, 1);
    write(todoFilesPath, tasks);
};

const list = () => {

    const tasks = read(todoFilesPath);

    if(tasks.length===0){    
        console.log('Não existem tarefas');
    }else{
        console.log('Tarefas:')
        tasks.forEach((taks, index) => {
            console.log(`${index + 1}. ${taks}`);
        });
    }
};

const args = process.argv.slice(2);
const command = args[0];
const task = args.slice(1).join('');

switch(command){
    case 'add':
        add(task);
        break;
    case 'remove':
        remove(task);
        break;
    case 'list':
        list();
        break;
    default:
        break;
}

