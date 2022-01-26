import React from 'react'

interface ILayerProps {
  children: JSX.Element
}

const Layer = ({ children }: ILayerProps) => {
  return (
    <>
      <header>Exhibitions!</header>
      <main>{children}</main>
    </>
  )
}

export default Layer
