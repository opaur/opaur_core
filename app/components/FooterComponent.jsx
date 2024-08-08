'use client';

export default function Footer() {
    return (
        <footer className="bg-card text-card-foreground p-4 dark:bg-card dark:text-card-foreground">
            <nav className="container mx-auto flex items-center justify-between">
                <div className="text-lg font-bold">
                    <span className="text-xl">OpAur v1</span>
                </div>
                <div className="flex space-x-4">
                    <a
                        href="/about"
                        className="px-3  py-2 text-sm rounded transition rounded-lg"
                        style={{
                            backgroundColor: 'hsl(var(--primary))',
                            color: 'hsl(var(--primary-foreground))'
                        }}
                    >
                        About Us
                    </a>
                    <a
                        href="/contact"
                        className="px-3  py-2 text-sm rounded transition rounded-lg"
                        style={{
                            backgroundColor: 'hsl(var(--primary))',
                            color: 'hsl(var(--primary-foreground))'
                        }}
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </footer>
    );
}
