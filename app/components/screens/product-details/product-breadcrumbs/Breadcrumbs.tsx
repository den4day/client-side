import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import Link from 'next/link'
import { FC } from 'react'

import { IProductDetails } from '@/types/product.interface'

const Breadcrumbs: FC<IProductDetails> = ({ product }) => {
	return (
		<Breadcrumb marginTop={8} paddingLeft={1}>
			<BreadcrumbItem>
				<BreadcrumbLink as={Link} href='/'>
					Главная
				</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem isCurrentPage>
				<BreadcrumbLink
					_hover={{ textDecoration: 'none' }}
					cursor='default'
					color='#888888'
				>
					{product.name}
				</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	)
}

export default Breadcrumbs
