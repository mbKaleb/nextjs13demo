import Link from "next/link"

export default function Header() {
	return (
		<header className="p-5 bg-black">
			<p>amazonbasics</p>
			<Link href="/" className="px-2 py-1 bg-white font-bold rounded-lg">Home</Link>
		</header>
	)
}