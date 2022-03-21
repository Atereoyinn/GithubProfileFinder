import React from 'react'
import ContactCard from './ContactCard'

const ContactCardList = ({newCard}) => {
  return (
   <>
    <div className='contactCardList'>
        {newCard.map((item)=> <ContactCard key={item.id} {...item}/>)}
    </div>
   </>
  )
}

export default ContactCardList