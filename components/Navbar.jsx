import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link href='/' passHref legacyBehavior><a><li>Home</li></a></Link>
                <Link href='/about' passHref legacyBehavior><a><li>About</li></a></Link>
                <Link href='/blog' passHref legacyBehavior><a><li>Blog</li></a></Link>
                <Link href='/contact' passHref legacyBehavior><a><li>Contact</li></a></Link>
            </ul>
        </nav>
    )
}

export default Navbar