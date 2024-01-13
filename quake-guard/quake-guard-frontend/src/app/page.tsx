import Image from "next/image";
import Link from "next/link";

function LinkButton(props: React.PropsWithChildren<{ href: string }>) {
	return (
		<Link href={props.href}>
			<div className='rounded-lg bg-gray-400 py-2 px-4'>
				{props.children}
			</div>
		</Link>
	);
}

export default function Home() {
	return (
		<div className='flex-1 flex flex-col bg-gradient-to-b from-cyan-500 to-blue-500'>
			<div className='flex-1'></div>
			<div className='mx-auto text-center '>
				{/* Typing animation here */}
				<div className='text-4xl font-bold text-white p-5'>
					Welcome to QuakeGuard
				</div>
				<div className='flex flex-row'>
					<LinkButton href='/about'>Learn More</LinkButton>
					<div className='flex-1'></div>
					<LinkButton href='/tool'>Use Tool</LinkButton>
				</div>
			</div>
			<div className='flex-1'></div>
		</div>
	);
}



