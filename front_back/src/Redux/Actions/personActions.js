import axios from 'axios'
import {GET_PERSONS} from '../Constants/personTypes'


// Affichage de tous les élements qui existent dans la base de données
export const getPersons=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/person')
        dispatch({
            type:GET_PERSONS,
            // "personn" le nom attribué dans la partie back-end au niveau de la fonction GET
            payload:res.data.personn})
    } catch (error) {
        console.log(error)
    }
}

//Suppression de l'element selectionné
export const deletePerson=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/person/${id}`)
        dispatch(getPersons())
        
    } catch (error) {
        console.log(error)
        
    }
}

//Ajout d'un nouvel element dans la base de données 
export const ajoutPerson=(newPerson)=>async(dispatch)=>{
    try {
        await axios.post('/api/person',newPerson)
        dispatch(getPersons())
    } catch (error) {
        console.log(error)
    }
}

//Modification d'une element qui existe déja
export const modifierPerson=(id,newPerson)=>async(dispatch)=>{
    try {
        await axios.put(`/api/person/${id}`,newPerson)
        dispatch(getPersons())
    } catch (error) {
        console.log(error)
    }
}