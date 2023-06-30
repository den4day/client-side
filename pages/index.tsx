import { NextPage } from 'next'

import { IProduct } from '@/types/product.interface'

import { products } from '@/data/product.data'
import Home from '@/screens/home/Home'

export interface IProductsPage {
	products: IProduct[]
}

// const HomePage: NextPage<IProductsPage> = ({ products }) => {
const HomePage: NextPage<IProductsPage> = () => {
	return <Home products={products} />
}

// export const getStaticProps: GetStaticProps<IProductsPage> = async () => {
// 	const products = await ProductService.getProducts()

// 	return {
// 		props: {
// 			products
// 		}
// 	}
// }

export default HomePage
