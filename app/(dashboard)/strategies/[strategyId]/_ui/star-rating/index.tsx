'use client'

import { useState } from 'react'

import classNames from 'classnames/bind'

import Star from '@/shared/ui/total-star/star-icon'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface Props {
  starRating?: number
}

const StarRating = ({ starRating }: Props) => {
  const [clickedIdx, setClickedIdx] = useState(0)

  return (
    <div className={cx('container')}>
      {starRating
        ? [...Array(Math.floor(starRating))].map((_, idx) => <Star key={idx} size="small" />)
        : [...Array(5)].map((_, idx) => (
            <button
              key={idx}
              className={cx('click-star', idx < clickedIdx && 'onColor')}
              onClick={() => setClickedIdx(idx + 1)}
            >
              <Star size="large" />
            </button>
          ))}
    </div>
  )
}

export default StarRating