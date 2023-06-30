import cn from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC, useState } from 'react'

import { TypeSize } from '@/store/cart/cart.types'

import { useActions } from '@/hooks/useActions'

import styles from '../Carousel.module.scss'

import AddToCartButton from './AddToCartButton'
import SizeVariations from './SizeVariations'
import CarouselNavigation from './carousel-navigation/CarouselNavigation'
import { ICarouselItem } from './carousel.interface'
import { useCarousel } from './useCarousel'

const CarouselItem: FC<ICarouselItem> = ({ product, index }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('S')

	const { selectedItemIndex } = useCarousel()
	const { selectSlide } = useActions()

	const isActive = index == selectedItemIndex

	return (
		<motion.div
			className={cn(styles.item, {
				[styles.active]: isActive
			})}
			transition={{ duration: 0.8, type: 'spring' }}
			aria-label='Выберите товар'
			role='button'
		>
			<div>
				<CarouselNavigation
					onSelectSlide={() => selectSlide(index)}
					product={product}
					isActive={isActive}
				/>
				<button className={styles.heading} onClick={() => selectSlide(index)}>
					<h2>{product.name}</h2>
				</button>
				{isActive ? (
					<>
						<SizeVariations
							selectedSize={selectedSize}
							setSelectedSize={setSelectedSize}
						/>
						<AddToCartButton product={product} selectedSize={selectedSize} />
						<Link className={styles.link} href={`/product/${product.slug}`}>
							<span className={styles['link-word']}>Подробнее</span>
						</Link>
					</>
				) : (
					<div className={styles.description}>{product.description}</div>
				)}
			</div>
		</motion.div>
	)
}

export default CarouselItem
