import React, { useState } from "react"

const initialContacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];
export const ResetDetails=()=>{
  const [contacts,setContacts]=useState(initialContacts)
 const [selectedId,setSelectedId]=useState(0)

 const handleSelectId=(id)=>{
   setSelectedId(id)
 }
//selectedContact is created to avoid dupliction of state
  const selectedContact=contacts.find(c=>c.id===selectedId)
 

  const handleSave=(updatedData)=>{
    const nextContact=contacts.map(c=>{
      if(c.id===updatedData.id){
        return updatedData
      }else{
      return  c
      }

    })
    setContacts(nextContact)
  }
  return(
  <>
  <h1>Reset details</h1>
  <ContactList contacts={contacts} selectedId={selectedId} handleSelectId={handleSelectId}/>
  <br/>
  <hr/>
  <Editcontacts key={selectedId} initialData={selectedContact} handleSave={handleSave}/>
  </>)
}

const ContactList=({contacts,selectedId,handleSelectId})=>{
  return (
    <>
    {contacts.map(item=> <button key={item.id} onClick={()=>handleSelectId(item.id)}>{item.id===selectedId?<b>{item.name}</b>:item.name}</button>)}
   </>
  )
}

const Editcontacts=({initialData,handleSave})=>{
const[name,setName]=useState(initialData.name)
const [email,setEmail]=useState(initialData.email)

  return (
    <>
    <span>name:</span>
    <input value={name} onChange={e=>setName(e.target.value)}></input>

    <span>Email:</span>
    <input value={email} onChange={e=>setEmail(e.target.value)}></input>
    <hr/>
    <button onClick={()=>handleSave({id:initialData.id,name:name,email:email})}>Save</button>
    <button onClick={()=>{setName(initialData.name);setEmail(initialData.email)}}>Reset</button>

    </>
  )
}