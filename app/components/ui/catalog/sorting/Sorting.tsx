import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FC, useState } from 'react'

import { sortingData } from './sorting.data'

// interface ISorting {
// 	sortType: EnumSorting
// 	setSortType: Dispatch<SetStateAction<EnumSorting>>
// }

// const Sorting: FC<ISorting> = ({ sortType, setSortType }) => {
const Sorting: FC = () => {
	const [sortType, setSortType] = useState('newest')

	return (
		<Menu direction='ltr'>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
				{sortingData.find(sort => sort.value == sortType)?.label}
			</MenuButton>
			<MenuList>
				{sortingData.map(sort => (
					// <MenuItem key={sort.value} onClick={() => setSortType(sort.value)}>
					<MenuItem key={sort.value} onClick={() => setSortType(sort.value)}>
						{sort.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}

export default Sorting
