import axios from 'axios'

import React, { useState } from 'react'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
  const [employees, setEmployees] = useState([])

  const getEmployee = async () => {
    try {
      const response = await axios.get(
        `https://crudcrud.com/api/${process.env.REACT_APP_TOKEN_CRUD_CRUD}/nutemployee`
      )
      setEmployees(response.data)
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
  }

  const states = { employees }
  const setters = { setEmployees }
  const requests = { getEmployee }

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState
