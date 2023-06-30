import { EnumSorting, ISortingItem } from './sorting.interface'

export const sortingData: ISortingItem[] = [
	{
		label: 'По новинкам',
		value: EnumSorting.NEWEST
	},
	{
		label: 'Старые',
		value: EnumSorting.OLDEST
	},
	{
		label: 'По возрастанию цену',
		value: EnumSorting.LOW_TO_HIGH_PRICE
	},
	{
		label: 'По убыванию цены',
		value: EnumSorting.HIGH_TO_LOW_PRICE
	}
]
