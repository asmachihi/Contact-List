import { useEffect } from 'react'
import './contactlist.css'
import ContactCard from './Card/ContactCard'


import {useDispatch, useSelector} from 'react-redux'
import { getPersons } from '../Redux/Actions/personActions'

const ContactListe =()=> {
  const  dispatch = useDispatch()
    useEffect(() => {
      dispatch(getPersons())
    }, [])

    const person = useSelector(state=>state.contactReducer.persons)    
     return(
      <div className="contacts-content">
         <div className="contacts-list">

             {
                 person.map(personne=><ContactCard personne={personne} key={personne._id}/>)
             }
         </div>
         </div>
     )


}

export default ContactListe