export enum EnumSorting {
	LOW_TO_HIGH_PRICE = 'low-to-high',
	HIGH_TO_LOW_PRICE = 'high-to-low',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

export interface ISortingItem {
	label: 'По убыванию цены' | 'По возрастанию цену' | 'По новинкам' | 'Старые'
	value: EnumSorting
}
