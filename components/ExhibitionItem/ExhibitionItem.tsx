import Link from 'next/link'

import { formatDate } from '../../utils/formatDate'
import styles from './ExhibitionItem.module.css'
import placeholder from '../../public/images/placeholder.png'

import { IExhibition } from '../../types/exhibition.types'

interface IExhibitionItemProps {
  item: IExhibition
}

const ExhibitionItem = ({ item }: IExhibitionItemProps) => {
  return (
    <Link passHref href={`/exhibitions/${item.id}`}>
      <div className={styles.item}>
        <img
          className={styles.logo}
          src={item.image_url || placeholder.src}
          alt={item.description}
        />
        <p className={styles.title}>{item.title}</p>
        <p className={styles.date}>{`${formatDate(
          item.aic_start_at
        )} - ${formatDate(item.aic_end_at)}`}</p>
      </div>
    </Link>
  )
}

export default ExhibitionItem
