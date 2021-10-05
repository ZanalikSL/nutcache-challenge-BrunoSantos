import { useContext } from 'react'

import axios from 'axios'

import { Button, ContainerInput } from './styled'

import GlobalStateContext from '../../global/GlobalStateContext'

export const DeleteEmployee = ({ id }) => {
  const { requests } = useContext(GlobalStateContext)

  const deleteLastEmployee = async () => {
    try {
      const response = await axios.delete(
        `https://crudcrud.com/api/${process.env.REACT_APP_TOKEN_CRUD_CRUD}/nutemployee/${id}`
      )
      alert('Employee Deleted!')
      requests.getEmployee()
    } catch (error) {
      alert('Employee NOT Deleted!')
      if (error.response) {
        console.log(error.response.data)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error', error.message)
      }
      console.log(error.config)
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    deleteLastEmployee()
  }

  return (
    <ContainerInput>
      <h2>Delete Last Employee</h2>
      <Button onClick={handleClick}>Delete</Button>
    </ContainerInput>
  )
}
