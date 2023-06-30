import { FC } from 'react'

import Layout from '@/layout/Layout'

import Catalog from '@/ui/catalog/Catalog'
import Heading from '@/ui/heading/Heading'

import styles from './Home.module.scss'
import { IProductsPage } from '@/../pages'

const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout
			title='Главная'
			description='Купите спецодежду в ЛНР интернет-магазине. Низкие цены. Большой выбор спецодежды. Доставка по Луганску и области.'
		>
			<Heading className={styles.heading}>Магазин спецодежды</Heading>
			<Catalog products={products} />
		</Layout>
	)
}

export default Home
