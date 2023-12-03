"use client"

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
const ProgressbarProvider = ({ children }) => {
    return (
        <>
            {children}
            <ProgressBar
                height="4px"
                color="#20B15A"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    )
}

export default ProgressbarProvider