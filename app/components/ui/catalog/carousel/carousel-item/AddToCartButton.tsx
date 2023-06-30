import { Button } from '@chakra-ui/react'
import { FC } from 'react'

import { COLORS } from '@/config/color.config'

import { TypeSize } from '@/store/cart/cart.types'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/types/product.interface'

interface IAddToCartButton {
	product: IProduct
	selectedSize: TypeSize
	variant?: 'small' | 'medium'
}

const AddToCartButton: FC<IAddToCartButton> = ({
	product,
	selectedSize,
	variant = 'small'
}) => {
	const { addToCart, removeFromCart } = useActions()
	const { cart } = useCart()

	const currentElement = cart.find(
		cartItem =>
			cartItem.product.id == product.id && cartItem.size == selectedSize
	)

	const isSmall = variant == 'small'

	return (
		<div className='text-center'>
			<Button
				onClick={() =>
					currentElement
						? removeFromCart({ id: currentElement.id })
						: addToCart({
								product,
								quantity: 1,
								size: selectedSize
						  })
				}
				color={isSmall ? COLORS.white : COLORS.green}
				className='tracking-widest font-normal transition ease-in'
				marginTop={8}
				borderRadius={20}
				fontWeight={isSmall ? 400 : 600}
				textTransform='uppercase'
				fontSize={isSmall ? 12 : 16}
				bgColor={isSmall ? COLORS.green : COLORS.white}
				_hover={{
					textColor: isSmall ? COLORS.green : COLORS.white,
					backgroundColor: isSmall ? COLORS.white : COLORS.green,
					border: isSmall
						? `1px solid ${COLORS.gray}`
						: `1px solid ${COLORS.white}`,
					transition: 'background-color 0.2s, text-color 0.2s, border 0.2s'
				}}
			>
				{currentElement ? 'Убрать из корзины' : 'Добавить в корзину'}
			</Button>
		</div>
	)
}

export default AddToCartButton
