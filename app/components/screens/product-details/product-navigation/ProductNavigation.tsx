import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import cn from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

import styles from './ProductNavigation.module.scss'
import { useProductNavigation } from './useProductNavigation'

const ProductNavigation: FC<{ productId: number }> = ({ productId }) => {
	const { prevProductSlug, nextProductSlug } = useProductNavigation(productId)

	return (
		<nav className={styles.nav}>
			<Link
				className={cn({
					disabled: !prevProductSlug
				})}
				href={`/product/${prevProductSlug}`}
			>
				<ChevronLeftIcon fontSize={46} color='#444444' />
			</Link>
			<Link
				className={cn({
					disabled: !nextProductSlug
				})}
				href={`/product/${nextProductSlug}`}
			>
				<ChevronRightIcon fontSize={46} color='#444444' />
			</Link>
		</nav>
	)
}

export default ProductNavigation
