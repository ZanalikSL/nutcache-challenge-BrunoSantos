import { useState, useContext } from 'react'

import axios from 'axios'

import { ContainerInput, Form, Input, InputButton, Select } from './styled'

import GlobalStateContext from '../../global/GlobalStateContext'

export const EditEmployee = ({id}) => {
  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [startDate, setStartDate] = useState('')
  const [team, setTeam] = useState('')

  const { requests } = useContext(GlobalStateContext)

  const options = {
    name: `${name}`,
    birthDate: `${birthDate}`,
    gender: `${gender}`,
    email: `${email}`,
    cpf: `${cpf}`,
    startDate: `${startDate}`,
    team: `${team}`,
  }

  const userInput = async () => {
    try {
      const response = await axios.put(
        `https://crudcrud.com/api/${process.env.REACT_APP_TOKEN_CRUD_CRUD}/nutemployee/${id}`,
        options
      )
      alert('Employee edited.')
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
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleBirthDate = (e) => {
    setBirthDate(e.target.value)
  }

  const handleGender = (e) => {
    setGender(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangeCpf = (e) => {
    setCpf(e.target.value)
  }

  const handleChangestartDate = (e) => {
    setStartDate(e.target.value)
  }

  const handleChangeTeam = (e) => {
    setTeam(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    userInput()
    setName('')
    setBirthDate('')
    setGender('')
    setEmail('')
    setCpf('')
    setStartDate('')
    setTeam('')
  }

  return (
    <ContainerInput>
      <h2>Edit Employee</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          required
          type="text"
          placeholder="Employee name"
          value={name}
          onChange={handleChangeName}
        />
        <Input
          required
          type="date"
          placeholder="Employee bith date"
          value={birthDate}
          onChange={handleBirthDate}
        />
        <Select required value={gender} onChange={handleGender}>
          <option value=" ">Select a Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Non-Binary">Non-Binary</option>
          <option value="Transgender">Transgender</option>
          <option value="Prefer not to disclose">Prefer not to disclose</option>
        </Select>
        <Input
          required
          type="email"
          placeholder="Employee mail"
          value={email}
          onChange={handleChangeEmail}
        />
        <Input
          required
          type="string"
          placeholder="Employee CPF"
          value={cpf}
          onChange={handleChangeCpf}
        />
        <Input
          required
          type="date"
          placeholder="Employee start date"
          value={startDate}
          onChange={handleChangestartDate}
        />
        <Select value={team} onChange={handleChangeTeam}>
          <option value=" ">Select a Team</option>
          <option value=" ">None</option>
          <option value="Mobile">Mobile</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </Select>
        <InputButton type="submit" value="Send" />
      </Form>
    </ContainerInput>
  )
}
