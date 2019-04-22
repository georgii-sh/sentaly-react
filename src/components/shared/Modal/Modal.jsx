// @flow

import React from 'react'
import { connect } from 'react-redux'

import bs4 from '../bs4'
import { closeModal } from '../../../redux'

import styles from './Modal.scss'

type Props = {
  title: string,
  content: string,
  isShown: boolean,
  closeModal: Function
}

class Modal extends React.PureComponent<Props> {

  close = () => {
    this.props.closeModal()
  }

  render() {
    const { isShown, title, content } = this.props
    return (
      <div 
        className={[bs4.modal, isShown ? styles.visible : styles.hiden].join(' ')}
        tabIndex={-1} 
        role="dialog"
      >
        <div className={bs4['modal-dialog']} role="document">
          <div className={bs4['modal-content']}>
            <div className={bs4['modal-header']}>
              <h5 className={bs4['modal-title']}>{title}</h5>
              <button type="button" className={bs4.close} data-dismiss="modal" aria-label="Close" onClick={this.close}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className={bs4['modal-body']}>
              <p>{content}</p>
            </div>
            <div className={bs4['modal-footer']}>
              <button type="button" className={[bs4.btn, bs4['btn-primary']].join(' ')} onClick={this.close}>
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  isShown: state.modalReducer.isShown,
  title: state.modalReducer.title,
  content: state.modalReducer.content
})

const mapDispatchToProps = (dispatch: Function) => ({
  closeModal() {
    dispatch(closeModal())
  }
})

export const UnwrappedModal = Modal

export default connect(mapStateToProps, mapDispatchToProps)(Modal)