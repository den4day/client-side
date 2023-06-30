import { IProduct } from '@/types/product.interface'

import { reviews } from './review.data'

export const products: IProduct[] = [
	{
		id: 1,
		description:
			'Простые х/б-перчатки сохраняют чувствительность пальцев, что немаловажно при работе с мелкими деталями, деревом, на высокоточном станковом оборудовании.',
		name: 'Перчатки 1',
		slug: 'gloves-1',
		images: ['/images/products/gloves.webp'],
		price: 150,
		reviews: [reviews[0], reviews[1], reviews[2]]
	},
	{
		id: 2,
		description:
			'Простые х/б-перчатки сохраняют чувствительность пальцев, что немаловажно при работе с мелкими деталями, деревом, на высокоточном станковом оборудовании.',
		name: 'Перчатки 2',
		slug: 'gloves-2',
		images: ['/images/products/gloves.webp'],
		price: 150,
		reviews: []
	},
	{
		id: 3,
		description:
			'Простые х/б-перчатки сохраняют чувствительность пальцев, что немаловажно при работе с мелкими деталями, деревом, на высокоточном станковом оборудовании.',
		name: 'Перчатки 3',
		slug: 'gloves-3',
		images: ['/images/products/gloves.webp'],
		price: 150,
		reviews: []
	},
	{
		id: 4,
		description:
			'Простые х/б-перчатки сохраняют чувствительность пальцев, что немаловажно при работе с мелкими деталями, деревом, на высокоточном станковом оборудовании.',
		name: 'Перчатки 4',
		slug: 'gloves-4',
		images: ['/images/products/gloves.webp'],
		price: 150,
		reviews: []
	},
	{
		id: 5,
		description:
			'Простые х/б-перчатки сохраняют чувствительность пальцев, что немаловажно при работе с мелкими деталями, деревом, на высокоточном станковом оборудовании.',
		name: 'Перчатки 5',
		slug: 'gloves-5',
		images: ['/images/products/gloves.webp'],
		price: 150,
		reviews: []
	},
	{
		id: 6,
		description:
			'Простые х/б-перчатки сохраняют чувствительность пальцев, что немаловажно при работе с мелкими деталями, деревом, на высокоточном станковом оборудовании.',
		name: 'Перчатки 6',
		slug: 'gloves-6',
		images: ['/images/products/gloves.webp'],
		price: 150,
		reviews: []
	},
	{
		id: 7,
		description:
			'Практичные классические ботинки для уверенных в себе мужчин. Вы оцените высокое качество натуральной кожи и добротный пошив этой модели. Такие ботинки лучше всего подойдут к повседневному деловому костюму.',
		name: 'Ботинки',
		slug: 'boots',
		images: [
			'/images/products/boots.webp',
			'/images/products/bootsVariant1.webp',
			'/images/products/bootsVariant2.webp'
		],
		price: 5000,
		reviews: [reviews[0], reviews[1], reviews[2]]
	}
]
