// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { bs4 } from '../'
import { closeModal } from '../../../redux'

type Props = {
  title: string,
  content: string,
  isShown: string,
  onClose: Function,
  closeModal: Function
}

class Modal extends React.PureComponent<Props> {

  constructor(params) {
    super(params)
    this.close = this.close.bind(this)
  }

  close() {
    this.props.closeModal()
  }

  render() {
    return (
      <div 
        className={[bs4.modal].join(' ')}
        style={{ display: this.props.isShown ? 'block': 'none' }}
        tabIndex={-1} 
        role="dialog"
      >
        <div className={bs4['modal-dialog']} role="document">
          <div className={bs4['modal-content']}>
            <div className={bs4['modal-header']}>
              <h5 className={bs4['modal-title']}>{this.props.title}</h5>
              <button type="button" className={bs4.close} data-dismiss="modal" aria-label="Close" onClick={this.close}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className={bs4['modal-body']}>
              <p>{this.props.content}</p>
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

const mapStateToProps = state => ({
  isShown: state.modalReducer.isShown,
  title: state.modalReducer.title,
  content: state.modalReducer.content
})

const mapDispatchToProps = dispatch => ({
  closeModal() {
    dispatch(closeModal())
  }
})

export const UnwrappedModal = Modal

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
