const express = require('express')
const Person = require('../Models/Person')
const route = express.Router()


//Methode : POST
//L'ajout d'un nouvel élement à la base de données
// On va utiliser req.body pour récupérer les données du corps

route.post('/',async(req,res)=>{
   try {
       const {name,prenom,age,email}=req.body
       const personne = new Person({
           name,prenom,age,email
       })
       await personne.save()
       res.status(200).send({msg:"Ajout des éléments avec succées",personne})
       
   } catch (error) {
       res.status(500).send({msg:"Impossible d'ajouter des éléments à la base de données"})
   }
})

// Methode :GET
// Affichage de la liste des personnes

route.get('/',async(req,res)=>{
    try {
        const personn = await Person.find()
        res.status(200).send({msg:"Voici la liste de vos données ",personn})
    } catch (error) {
        res.status(500).send({msg:"Impossible d'afficher la liste des éléments à la base de données"})
    }
})


//Methode : DELETE
// Suppression des élemets
//On va utiliser req.params pour récupérer l'ID

route.delete('/:ID',async(req,res)=>{
    try {
        const {ID} = req.params
        const per = await Person.findByIdAndDelete(ID)
        res.status(200).send({msg:"Element supprimé avec succées",per})
    } catch (error) {
        res.status(500).send({msg:"Impossible de supprimer la liste des éléments de la base de données"})
    }
})

// Methode : PUT
// Modifications des élements
// On va utiliser req.params pour récupérer l'ID et req.body pour avoir un accés au corps 

route.put('/:ID',async(req,res)=>{
    try {
        const{ID}= req.params
        const putperson = await Person.findByIdAndUpdate({_id:ID},{$set:{...req.body}})
        res.status(200).send({msg:"Element modifié avec succées",putperson})
    } catch (error) {
        res.status(500).send({msg:"Impossible de modifier cet élément dans la base de données"})
    }
})


// Methode : GET
// Affichage d'un element par ID
// on va utiliser req.params pour récupérer d'ID

route.get('/',async(req,res)=>{
    try {
        const {ID}=req.params
        const personid = await Person.findById({_id:ID})
        res.status(200).send({msg:"Voici l'élement recherché",personid})
        
    } catch (error) {
        res.status(500).send({msg:"Impossible d'afficher cet élément dans la base de données"})
    }
})


module.exports = route