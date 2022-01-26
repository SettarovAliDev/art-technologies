import { useEffect, useState } from 'react'

import exhibitionsApi from '../../api/api'
import ExhibitionItem from '../ExhibitionItem/ExhibitionItem'

import styles from './ExhibitionsList.module.css'

import { IExhibition } from '../../types/exhibition.types'

interface IExhibitionsListProps {
  exhibitions: IExhibition[]
}

const ExhibitionsList = ({
  exhibitions: exhibitionsInitial,
}: IExhibitionsListProps) => {
  const [exhibitions, setExhibitions] = useState(exhibitionsInitial)
  const [counter, setCounter] = useState(2)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1) {
      const response = await exhibitionsApi.get(`exhibitions?page=${counter}`)
      setExhibitions((prev) => [...prev, ...response.data.data])
      setCounter((prev) => prev + 1)
    }
  }

  return (
    <div className={styles.list}>
      {exhibitions.map((item) => (
        <ExhibitionItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ExhibitionsList
