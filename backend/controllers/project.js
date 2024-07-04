const { Schema, default: mongoose } = require("mongoose");
const Project=require("../models/project");


//functionality behind index route
exports.getAll = async() => {
    const projects = Project.find();
    return projects;
}

//functionality behind create route
exports.addNew = async(req, res) => {
    try{
        const newProj = new Project(req.body);
        await newProj.save();
        res.status(201).json(newProj);
    } catch (error){
        console.log(error);
        return res.status(500).json({message: 'Error adding product, please trying again later'});
    }

}

//functionality behind show route
exports.getOne = async(req, res) => {
    try{
        const {id}= req.params;
        const result=await Project.findById(id);
        return result;
    } catch{
        console.log(error);
        res.status(500).json({message:'Error updating product, please try again later'});
    }

}