import { FC, useState } from 'react'

import AddToCartButton from '@/ui/catalog/carousel/carousel-item/AddToCartButton'
import SizeVariations from '@/ui/catalog/carousel/carousel-item/SizeVariations'

import { TypeSize } from '@/store/cart/cart.types'

import { IProductDetails } from '@/types/product.interface'

import styles from './ProductCard.module.scss'
import ProductRating from './product-variations/ProductRating'

const ProductVariations: FC<IProductDetails> = ({ product }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('S')

	return (
		<div className={styles.variations}>
			<ProductRating product={product} />
			<SizeVariations
				variant='medium'
				selectedSize={selectedSize}
				setSelectedSize={setSelectedSize}
			/>
			<AddToCartButton
				variant='medium'
				product={product}
				selectedSize={selectedSize}
			/>
		</div>
	)
}

export default ProductVariations
