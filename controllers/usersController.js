const User = require('../models/User.js');


const userController = {

getAll: (req, res) => {
    
    const users = User.findAll();

    if(users.length===0){    
        res.status(404).json({message: 'User não encontrada'});
    }else{
        res.json(users)  
    }
},

getOne: async (req, res) => {

    const id = req.params.id
    const user = await User.findByPk(id);
    if(!user){
        return res.status(404).json({error: 'User não encontrada'})
        }
    res.status(200).json(user)
    
},

createUser: async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const user = {name, email, password}
        await User.create(user);
        res.status(201).json(user.id);
    }catch(error){
        console.log(error)
        res.status(500).json({error: 'internal error'});
    }
},

delete: async (req, res)=>{
    
    try{
        const id = req.params.id
        const user = await User.findByPk(id);
        if(!user){
            return res.status(404).json({error: 'User não encontrada'})
        }
        await user.destroy();
        res.status(204).json({message: 'User removida com sucesso'})
    }catch{
        res.status(500).json({error: 'internal error'});
    }
},

}

module.exports = userController;