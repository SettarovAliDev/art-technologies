import styles from './Layer.module.css'

interface ILayerProps {
  children: JSX.Element
}

const Layer = ({ children }: ILayerProps) => {
  return (
    <>
      <header>
        <h1 className={styles.heading}>Exhibitions!</h1>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layer
