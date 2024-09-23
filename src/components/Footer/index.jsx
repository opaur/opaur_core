
const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        
        <footer className="p-4">
               
            <nav className="container mx-auto flex items-center justify-between max-w-screen-lg">
                <div className="text-lg">
                    <span className="text-sm dark:text-white">{currentYear} Opaur. All rights reserved.</span>
                </div>
                <div className="flex space-x-4">
                <a
                        href="https://www.linkedin.com/company/opaur/"
                        target="_blank"
                        className="px-3 py-2 text-sm transition-colors duration-300 hover:text-blue-500"
                    >
                        <svg class="h-5 w-5 text-red-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                    </a>
                    <a
                        href="https://www.instagram.com/opaur.ai?igsh=MXVpcTc5dThxZ3FtZg%3D%3D&utm_source=qr"
                        target="_blank"
                        className="px-3 py-2 text-sm transition-colors duration-300 hover:text-blue-500"
                    >
                        <svg class="h-5 w-5 text-red-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                    </a>
                    <a
                        href="/contact"
                        className="px-3 py-2 text-sm transition-colors duration-300 hover:text-blue-500"
                    >
                        <svg class="h-5 w-5 text-red-300"  width="24" height="24" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    </a>
                </div>
            </nav>
        </footer>
    );
}
