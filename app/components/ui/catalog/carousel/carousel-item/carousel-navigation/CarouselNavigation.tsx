import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import { FC } from 'react'

import { useActions } from '@/hooks/useActions'

import { ICarouselNavigation } from '../carousel.interface'

import styles from './CarouselNavigation.module.scss'
import { products } from '@/data/product.data'

const CarouselNavigation: FC<ICarouselNavigation> = ({
	product,
	isActive,
	onSelectSlide
}) => {
	const { prevSlide, nextSlide } = useActions()

	return (
		<div className={styles.navigation}>
			{isActive && (
				<div className={styles.arrows}>
					<button className={styles.arrow} onClick={() => prevSlide()}>
						<ChevronLeftIcon fontSize={70} />
					</button>
					<button
						className={styles.arrow}
						onClick={() => nextSlide({ carouselLength: products.length })}
					>
						<ChevronRightIcon fontSize={70} />
					</button>
				</div>
			)}
			<button className={styles.image} onClick={onSelectSlide}>
				<Image
					src={product.images[0]}
					width={150}
					height={150}
					alt={product.name}
					draggable={false}
				/>
			</button>
		</div>
	)
}

export default CarouselNavigation
