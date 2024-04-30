// const { where } = require('sequelize');
const { error } = require('console');
const Tarefa = require('../models/Todo.js');
// const path = require('node:path')

// const todoFilesPath = path.join(__dirname,'taskServer.json');

const tarefaController = {

getAll: (req, res) => {
    
    const tasks = Tarefa.findAll();

    if(tasks.length===0){    
        res.status(404).json({message: 'Tarefa não encontrada'});
    }else{
        res.json(tasks)  
    }
},

getOne: async (req, res) => {

    const id = req.params.id
    const task = await Tarefa.findByPk(id);
    if(!task){
        return res.status(404).json({error: 'Tarefa não encontrada'})
        }
    res.status(200).json(task)
    
},

createTarefa: async (req, res) => {
    try{
        const {name, description} = req.body;
        const task = {name: name, description:description}
        console.log(task)
        await Tarefa.create(task)
        res.status(201).json(task);
        
    }catch(error){
        res.status(500).json({error: 'internal error'});
        console.log(error)
        
    }
},

delete: async (req, res)=>{
    
    try{
        const id = req.params.id
        const task = await Tarefa.findByPk(id);
        if(!task){
            return res.status(404).json({error: 'Tarefa não encontrada'})
        }
        await task.destroy();
        res.status(204).json({message: 'Tarefa removida com sucesso'})
    }catch{
        res.status(500).json({error: 'internal error'});
    }
},


/* search: (req, res) => {
    const category = req.params.category;
    res.send(`<h2>Product Details</h2><p>Category: ${category}`)
} */

}

module.exports = tarefaController;