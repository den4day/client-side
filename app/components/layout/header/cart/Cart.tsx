import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay
} from '@chakra-ui/react'
import Image from 'next/image'
import { FC, useRef, useState } from 'react'

import { useCart } from '@/hooks/useCart'

import { formatToCurrency } from '@/utils/format-to-currency'

import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)

	const { cart, total } = useCart()

	return (
		<div className={styles['wrapper-cart']}>
			<button
				className={styles.heading}
				onClick={() => setIsOpen(!isOpen)}
				ref={btnRef}
			>
				<Image
					className={styles.cartImg}
					src='/icons/cart.png'
					width={30}
					height={30}
					alt='Online shop'
				/>
				<span className={styles.badge}>{cart.length}</span>
				<span className={styles.text}>КОРЗИНА</span>
			</button>

			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={() => setIsOpen(false)}
				finalFocusRef={btnRef}
				size={'xs'}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Моя корзина</DrawerHeader>

					<DrawerBody>
						{cart.length ? (
							<div className={styles.cart}>
								{cart.map(item => (
									<CartItem item={item} key={item.id} />
								))}
							</div>
						) : (
							<div>В корзине нет товаров</div>
						)}
					</DrawerBody>

					<DrawerFooter
						justifyContent='space-between'
						borderTopWidth={1}
						borderTopColor={'#888888'}
					>
						<div className={styles.footer}>
							<div>Всего:</div>
							<div>{formatToCurrency(total)}</div>
						</div>
						<Button colorScheme='green'>Оформить заказ</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default Cart
