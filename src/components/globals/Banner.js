import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { setColor } from '../../styles'

function Banner({ className, title, text, children, greeting }) {
  return (
    <div className={className}>
      <h1>{greeting} <span>{title}</span></h1>
      <div className='info'>
        <p>{text}</p>
        {children}
      </div>
    </div>   
  )
}

const BannerWrapper = styled(Banner)`
  color: blue;
`

export default BannerWrapper