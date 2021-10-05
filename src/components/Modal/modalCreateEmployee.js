import React from 'react'
import ReactDOM from 'react-dom'

import { CreateEmployee } from '../CreateEmployee'

import {
  Modal,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  ModalWrapper,
} from './styled'

export const ModalCreateEmployee = ({ isShowing, hide }) =>
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
              <CreateEmployee />
            </Modal>
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null
