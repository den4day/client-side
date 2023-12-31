import cn from 'clsx'
import Image from 'next/image'
import { Dispatch, FC, SetStateAction } from 'react'

import { IProductDetails } from '@/types/product.interface'

import styles from './ProductCard.module.scss'

interface IProductInformation extends IProductDetails {
	currentImageIndex: number
	setCurrentImageIndex: Dispatch<SetStateAction<number>>
}

const ProductInformation: FC<IProductInformation> = ({
	product,
	currentImageIndex,
	setCurrentImageIndex
}) => {
	return (
		<div className={styles.information}>
			<h2>{product.name}</h2>
			<div>
				<p>{product.description}</p>
			</div>
			<div className={styles.gallery}>
				{product.images.map((image, index) => (
					<button
						key={image}
						onClick={() => setCurrentImageIndex(index)}
						className={cn({
							[styles.active]: index == currentImageIndex
						})}
					>
						<Image src={image} alt='' width={75} height={75} />
					</button>
				))}
			</div>
		</div>
	)
}

export default ProductInformation
