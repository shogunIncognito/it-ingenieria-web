import { useState } from "react"

export default function MobileNav({ path, routes }) {
    const [open, setOpen] = useState(false)

    const handleClose = () => setOpen(false)

    return (
        <div className="lg:hidden relative z-40">
            <button onClick={() => setOpen(!open)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute bottom-0" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            {open && (
                <ul className="z-50 absolute grid-cols-2 grid top-16 bg-slate-100 shadow-md rounded p-3 w-max transition-all">
                    {routes.map(route => (
                        <li key={route.label} className="p-3">
                            <a
                                href={route.url}
                                onClick={handleClose}
                                className={`${route.url === path ? 'border-b-4 border-blue-400 rounded' : ''} hover:bg-gray-800/30 p-3 transition-all`}
                            >
                                {route.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
