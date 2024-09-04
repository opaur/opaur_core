


export default function Footer() {
    return (
        
        <footer className="p-4">
               
            <nav className="container mx-auto flex items-center justify-between max-w-screen-lg">
                <div className="text-lg font-bold">
                    <span className="text-xl">OpAur</span>
                </div>
                <div className="flex space-x-4">
                    <a
                        href="/about"
                        className="px-3 py-2 text-sm transition-colors duration-300 hover:text-blue-500"
                    >
                        About Us
                    </a>
                    <a
                        href="/contact"
                        className="px-3 py-2 text-sm transition-colors duration-300 hover:text-blue-500"
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </footer>
    );
}
