import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import styles from './Menu.module.scss'
import MenuItem from './menu-item/MenuItem'
import { menu } from './menu.data'

const Menu: FC = () => {
	const [isActive, setIsActive] = useState(false)

	return (
		<div className={styles.menu}>
			<Link href='/'>
				<Image
					className={styles.logoImg}
					src='/logo.png'
					width={100}
					height={100}
					alt='Online shop'
				/>
			</Link>

			<nav className={cn({ [styles.active]: isActive })}>
				<CloseIcon
					className={styles.burgerIcon}
					onClick={() => {
						isActive ? setIsActive(false) : setIsActive(true)
					}}
				/>
				<ul>
					{menu.map(item => (
						<MenuItem key={item.link} item={item} />
					))}
				</ul>
			</nav>
			<HamburgerIcon
				className={styles.burgerIcon}
				onClick={() => {
					isActive ? setIsActive(false) : setIsActive(true)
				}}
			/>
		</div>
	)
}

export default Menu
