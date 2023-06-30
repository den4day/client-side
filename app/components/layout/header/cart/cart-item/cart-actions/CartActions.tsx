import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { FC } from 'react'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { ICartItem } from '@/types/cart.interface'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 1,
			min: 1
		})

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	const { removeFromCart, changeQuantity } = useActions()

	const { cart } = useCart()

	const quantity = cart.find(cartItem => cartItem.id === item.id)?.quantity

	return (
		<div className='mt-3'>
			<HStack>
				<Button
					{...dec}
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
				>
					<MinusIcon fontSize={12} />
				</Button>
				<Input
					{...input}
					focusBorderColor='green.400'
					readOnly
					_hover={{ cursor: 'default' }}
					value={quantity}
					w='44px'
				/>
				<Button
					{...inc}
					onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
				>
					<AddIcon fontSize={12} />
				</Button>
			</HStack>
			<Button
				variant='unstyled'
				color='red.400'
				marginTop={2}
				size='sm'
				opacity={0.8}
				onClick={() => removeFromCart({ id: item.id })}
			>
				Удалить
			</Button>
		</div>
	)
}

export default CartActions
