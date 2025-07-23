'use client';

import { useEffect, useState } from "react";

export function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="border-t">
            <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                 <div className="flex items-center space-x-2">
                    <span className="font-bold text-md font-headline">Yash Lalit Sharma</span>
                </div>
                <p className="text-sm text-muted-foreground">
                    &copy; {year} Yash Lalit Sharma. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
