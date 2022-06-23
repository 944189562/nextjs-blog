import React, { memo } from 'react'
import cn from 'classnames'
import { AlertWrapper } from './style'

const Alert = memo(({children, type}) => {
  return (
    <AlertWrapper type={type}>
      <div className='color'>
        {children}
      </div>
    </AlertWrapper>
  )
})

export default Alert