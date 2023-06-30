import { products } from '@/data/product.data'

export const useProductNavigation = (productId: number) => {
	const prevProductSlug = products.find(
		product => product.id == productId - 1
	)?.slug
	const nextProductSlug = products.find(
		product => product.id == productId + 1
	)?.slug

	return {
		prevProductSlug,
		nextProductSlug
		// isPrevDisbled: productId == 1,
		// isNextDisbled: productId == products.length
	}
}
