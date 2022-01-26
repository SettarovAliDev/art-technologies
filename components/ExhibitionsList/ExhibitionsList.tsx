import { useEffect, useState } from 'react'
import exhibitionsApi from '../../api/api'
import ExhibitionItem from '../ExhibitionItem/ExhibitionItem'

const ExhibitionsList = () => {
  const [exhibitions, setExhibitions] = useState([])

  useEffect(() => {
    const getExhibitions = async () => {
      const response = await exhibitionsApi.get('exhibitions')
      setExhibitions(response.data.data)
    }
    getExhibitions()
  }, [])

  return (
    <>
      {exhibitions.map((item, index) => (
        <ExhibitionItem key={index} />
      ))}
    </>
  )
}

export default ExhibitionsList
