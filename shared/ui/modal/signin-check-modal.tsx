'use client'

import React from 'react'

import { ModalAlertIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import Modal from '.'
import { Button } from '../button'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  isModalOpen: boolean
  onCloseModal: () => void
  onConfirm: () => void
}

const SigninCheckModal = ({ isModalOpen, onCloseModal, onConfirm }: Props) => {
  return (
    <Modal isOpen={isModalOpen} icon={ModalAlertIcon}>
      <span className={cx('message')}>
        로그인이 필요합니다.
        <br />
        로그인 하시겠습니까?
      </span>
      <div className={cx('two-button')}>
        <Button onClick={onCloseModal}>아니오</Button>
        <Button onClick={onConfirm} variant="filled" className={cx('button')}>
          예
        </Button>
      </div>
    </Modal>
  )
}

export default SigninCheckModal
