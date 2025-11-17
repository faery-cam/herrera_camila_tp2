import NavBar from './NavBar.jsx';

export default function Header() {
    return (
        <header className="relative px-4 md:pl-20 md:pr-4 pt-4 pb-8 bg-pink-500">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center mx-auto ">ANATASHIA</h1>
            <NavBar />
        </header>
    )
}