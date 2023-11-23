export default function ComponentLayout({ children, }: {children: React.ReactNode}){
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}