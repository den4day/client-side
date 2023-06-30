import { ICartItem } from '@/types/cart.interface'

export interface ICartInitialState {
	items: ICartItem[]
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
	type: 'minus' | 'plus'
}

export type TypeSize = 'S' | 'M' | 'L' | 'XL'

export interface IChangeSizePayload extends Pick<ICartItem, 'id'> {
	size: TypeSize
}
