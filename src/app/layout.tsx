'use client';

// Components
import {
	DashboardLayout,
	DashboardNav,
	DashboardSearch,
	GlobalWrapper,
	MenuButton,
	Navbar,
	WorkspaceSelector,
	UserMenu,
} from '@pantheon-systems/pds-toolkit-react';

// Data
import {
	dashboardNavSampleMenuItems,
	helpMenuItems,
	sampleSites,
	userMenuItems,
	workspaceItems,
} from '../../data/global';

import '../../node_modules/@pantheon-systems/pds-toolkit-react/_dist/css/pds-core.css';

import './styles.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<GlobalWrapper>
					<DashboardLayout>
						<Navbar
							key='navbar'
							slot='header'
							colorType='transparent'
							containerWidth='full'
							hideBorder
							hideLogo
						>
							<WorkspaceSelector
								slot='items-left'
								workspaceList={workspaceItems}
								createWorkspaceLink={
									<a href='https://dashboard.pantheon.io/workspace/create-workspace'>
										Create workspace
									</a>
								}
							/>
							<DashboardSearch
								slot='items-right'
								id='dashboard-search'
								label='Search sites'
								placeholder='Search sites'
								siteList={sampleSites}
							/>
							<MenuButton
								slot='items-right'
								label='Help'
								menuItems={helpMenuItems}
								variant='navbar'
								withinNavbar
							/>
							<UserMenu
								slot='items-right'
								ariaLabel='User menu'
								menuItems={userMenuItems}
								userEmail='devin@mrsbeagleface.com'
								userImageSrc='https://cdn.bfldr.com/MEM5087K/at/ff4pq2jhft94x7fsxc9kkx/devin.jpg?auto=webp&format=png&width=100&height=100'
								userName='Devin Miller'
							/>
						</Navbar>
						<DashboardNav
							slot='sidebar'
							ariaLabel='Workspace navigation'
							menuItems={dashboardNavSampleMenuItems}
						/>
						<div slot='main'>{children}</div>
					</DashboardLayout>
				</GlobalWrapper>
			</body>
		</html>
	);
}
