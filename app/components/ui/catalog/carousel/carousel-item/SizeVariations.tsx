import cn from 'clsx'
import { Dispatch, FC, SetStateAction } from 'react'

import { TypeSize } from '@/store/cart/cart.types'

import styles from '../Carousel.module.scss'

const SIZES: TypeSize[] = ['S', 'M', 'L', 'XL']

interface ICarouselVariations {
	selectedSize: TypeSize
	setSelectedSize: Dispatch<SetStateAction<TypeSize>>
	variant?: 'small' | 'medium'
}

const SizeVariations: FC<ICarouselVariations> = ({
	selectedSize,
	setSelectedSize,
	variant = 'small'
}) => {
	return (
		<div
			className={cn(styles.variations, {
				[styles.medium]: variant == 'medium'
			})}
		>
			{SIZES.map(size => (
				<button
					className={cn({
						[styles.active]: selectedSize === size
					})}
					key={size}
					onClick={() => setSelectedSize(size)}
				>
					{size}
				</button>
			))}
		</div>
	)
}

export default SizeVariations
