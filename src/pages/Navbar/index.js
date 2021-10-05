import { useState } from 'react'

import { UseModalCreteEmployee } from '../../components/Modal/useModalCreteEmployee'
import { UseModalEditEmployee } from '../../components/Modal/useModalEditEmployee'
import { UseModalDeleteEmployee } from '../../components/Modal/useModalDeleteEmployee'

import { ModalCreateEmployee } from '../../components/Modal/modalCreateEmployee'
import { ModalEditEmployee } from '../../components/Modal/modalEditEmployee'
import { ModalDeleteEmployee } from '../../components/Modal/modalDeleteEmployee'

import { IdContext } from '../../components/Contexts/idContext'

import {
  Bars,
  Button,
  Nav,
  NavBtn,
  NavLogo,
  NavMenu,
} from './styled'

export const Navbar = () => {
  const [id, setId] = useState()

  const { isShowingCreteEmployee, toggleCreteEmployee } = UseModalCreteEmployee()
  const { isShowingEditEmployee, toggleEditEmployee } = UseModalEditEmployee()
  const { isShowingDeleteEmployee, toggleDeleteEmployee } = UseModalDeleteEmployee()

  return (
    <Nav>
      <NavLogo>Employee CrudCrud</NavLogo>
      <Bars />
      <IdContext.Provider value={{ id, setId }}>
        <NavMenu>
          <Button onClick={toggleCreteEmployee}>Create Employee</Button>
          <ModalCreateEmployee
            isShowing={isShowingCreteEmployee}
            hide={toggleCreteEmployee}
          />
          <Button onClick={toggleDeleteEmployee}>Delete last Employee</Button>
          <ModalDeleteEmployee
            isShowing={isShowingDeleteEmployee}
            hide={toggleDeleteEmployee}
            id={id}
          />
          <Button onClick={toggleEditEmployee}>Edit last Employee</Button>
          <ModalEditEmployee
            isShowing={isShowingEditEmployee}
            hide={toggleEditEmployee}
            id={id}
          />
          <NavBtn />
        </NavMenu>
      </IdContext.Provider>
    </Nav>
  )
}
