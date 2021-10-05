import { useEffect, useContext } from 'react'

import axios from 'axios'

import { ModalEditEmployee } from '../../components/Modal/modalEditEmployee'
import { UseModalEditEmployee } from '../../components/Modal/useModalEditEmployee'

import { Body, Button, Employee, Opration, Td, Title } from './styled'

import GlobalStateContext from '../../global/GlobalStateContext'

export const EmployeeGridList = () => {
  const { states, requests } = useContext(GlobalStateContext)

  useEffect(() => {
    requests.getEmployee()
  }, [])

  const removeEmployee = async (id) => {
    if (window.confirm('Confirm the deletion!')) {
      try {
        const response = await axios.delete(
          `https://crudcrud.com/api/${process.env.REACT_APP_TOKEN_CRUD_CRUD}/nutemployee/${id}`
        )
        requests.getEmployee()
      } catch (error) {
        if (error.response) {
          console.log(error.response.data)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
        console.log(error.config)
      }
    } else {
      alert('Deletion not confirmed!')
    }
  }

  const renderHeader = () => {
    let headerElement = ['name', 'email', 'start Date', 'team', 'operation']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = () => {
    const { isShowingEditEmployee, toggleEditEmployee } = UseModalEditEmployee()

    return (
      states.employees &&
      states.employees.map(({ _id, name, email, startDate, team }) => {
        return (
          <tr key={_id}>
            <Td>{name}</Td>
            <Td>{email}</Td>
            <Td>{startDate}</Td>
            <Td>{team}</Td>
            <Opration>
              <Button onClick={() => removeEmployee(_id)}>Delete</Button>
              <Button onClick={toggleEditEmployee}>Edit</Button>
              <ModalEditEmployee
                isShowing={isShowingEditEmployee}
                hide={toggleEditEmployee}
                id={_id}
              />
            </Opration>
          </tr>
        )
      })
    )
  }

  return (
    <Body>
      <Title>Employee List</Title>
      <Employee>
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </Employee>
    </Body>
  )
}
