import { FC } from 'react'

import styles from './Catalog.module.scss'
import Carousel from './carousel/Carousel'
import Sorting from './sorting/Sorting'
import { IProductsPage } from '@/../pages'

// import { ProductService } from '@/services/ProductService'

const Catalog: FC<IProductsPage> = ({ products }) => {
	// const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST)

	// const { data, isLoading } = useQuery(
	// 	['/products', sortType],
	// 	() => ProductService.getProducts(sortType),
	// 	{
	// 		initialData: products
	// 	}
	// )

	return (
		<div>
			<div className={styles.sorting}>
				{/* <Sorting sortType={sortType} setSortType={setSortType} /> */}
				<Sorting />
			</div>
			{/* {isLoading ? <Loader /> : <Carousel products={data} />} */}
			<Carousel products={products} />
		</div>
	)
}

export default Catalog
