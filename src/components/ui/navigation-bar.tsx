import { ReactNode } from "react";

export default function Navigation({children} : {children: ReactNode}) {
    return (
        <nav
            className="px-2 py-4 flex items-center justify-between"
        >
            {children}
        </nav>
    )
}