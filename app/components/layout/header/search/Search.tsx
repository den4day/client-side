import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { FC } from 'react'

import styles from './Search.module.scss'

// import { products } from '@/data/product.data'

const Search: FC = () => {
	// const [searchTerm, setSearchTerm] = useState<string>('')

	// const { data, isLoading } = useQuery(['/products', searchTerm], () =>
	// 	ProductService.bySearchTerm(searchTerm)
	// )

	// console.log(data)

	return (
		<div className={styles.search}>
			<InputGroup>
				<Input
					variant='flushed'
					type='search'
					_focus={{
						boxShadow: 'none'
					}}
					_focusVisible={{
						borderColor: '#3CA972'
					}}
					placeholder='Поиск'
				/>
				<InputRightElement
					pointerEvents='none'
					children={<SearchIcon color='gray.500' />}
				/>
			</InputGroup>
		</div>
	)
}

export default Search
