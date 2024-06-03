import {TextInput, Title, Button, } from "@tremor/react"

function AddUserForm() {
  const handleSubmit :  React.FormEventHandler<HTMLFormElement> = (e)=> { 
    e.preventDefault()
    e.preventDefault()
    const form = e.currentTarget // current target us used because a want to know the element in which the hanlder is declare and not the very origin component that trigger the event
    console.log("submited")
    const formData = new FormData(form)
    console.log( formData)
    console.log( formData.get('nombre'))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Title> Add a new user</Title>
      <TextInput name="nombre" placeholder="nombre"/>
      <TextInput name="email" placeholder="email"/>
      <TextInput name="github" placeholder="github"/>
      <Button type="submit"> Add new user</Button> 
    </form>
  )
}

export default AddUserForm