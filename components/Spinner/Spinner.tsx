import styles from './Spinner.module.css'

const Spinner = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container} />
    </div>
  )
}

export default Spinner
