import Image from "next/image"
import Link from "next/link"

export default function Header() {
	return (
		<header className="flex justify-center h-24 p-5 bg-black z-503">
			<Image className="margin-left-auto -top-10 absolute" src="/../public/amazon-basics-logo.png" alt="amazon basics logo" width={'200'} height={'5'} />
			<div>Test</div>
			{/* <Link href="/" className="px-2 py-1 bg-white font-bold rounded-lg">Home</Link> */}
		</header>
	)
}


