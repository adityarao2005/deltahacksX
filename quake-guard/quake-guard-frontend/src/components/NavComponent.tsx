import Link from "next/link";

function NavLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<li>
			<Link href={href}>{children}</Link>
		</li>
	);
}

function Navbar(props: React.PropsWithChildren<{}>) {
	return (
		<nav>
			<ul>{props.children}</ul>
		</nav>
	);
}

export default function NavComponent() {
	return (
		<Navbar>
			<NavLink href='/'>Home</NavLink>
			<NavLink href='/about'>About</NavLink>
			<NavLink href='/tool'>Tool</NavLink>
			<NavLink href='/donate'>Donate</NavLink>
		</Navbar>
	);
}
