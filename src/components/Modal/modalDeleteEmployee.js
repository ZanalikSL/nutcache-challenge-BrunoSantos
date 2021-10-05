import React from 'react'
import ReactDOM from 'react-dom'

import { DeleteEmployee } from '../DeleteEmployee'

import {
  Modal,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  ModalWrapper,
} from './styled'

export const ModalDeleteEmployee = ({ isShowing, hide, id }) =>
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
              <DeleteEmployee id={id}/>
            </Modal>
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null
