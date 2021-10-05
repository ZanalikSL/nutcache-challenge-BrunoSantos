import React from 'react'
import ReactDOM from 'react-dom'

import { EditEmployee } from '../EditEmployee'

import {
  Modal,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  ModalWrapper,
} from './styled'

export const ModalEditEmployee = ({ isShowing, hide, id }) =>
  isShowing ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalOverlay />
          <ModalWrapper>
            <Modal>
              <ModalHeader>
                <ModalCloseButton onClick={hide}>
                  <span>&times;</span>
                </ModalCloseButton>
              </ModalHeader>
              <EditEmployee id={id}/>
            </Modal>
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null
