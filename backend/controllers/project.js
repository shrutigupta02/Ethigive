const { Schema, default: mongoose } = require("mongoose");
const Project=require("../models/project");


//functionality behind index route
exports.getAll = async() => {
    const projects = Project.find();
    return projects;
}

//functionality behind create route
exports.addNew = async(req, res) => {
    console.log(req.body)
    try{
        const newProj = new Project(req.body);
        await newProj.save().then(result=>console.log(result)).catch(err => console.log(err));
        res.status(201).json(newProj);
    } catch (error){
        console.log('Error adding project: ',error);
        return res.status(500).json({message: 'Error adding product, please trying again later'});
    }

}

//functionality behind show route
exports.getOne = async(req, res) => {
    try{
        const {id}= req.params;
        const result=await Project.findById(id);
        if(!result){
            return res.status(404).json({message: 'Project not found'});
        }
        return result;
    } catch{
        console.log(error);
        res.json({message:'Error updating product, please try again later'});
    }

}