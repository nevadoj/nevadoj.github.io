export default function Container({ children, }: { children: React.ReactNode }){
    return (
        <div className="flex flex-col mx-auto max-w-2xl lg:grid lg:grid-cols-12">
            {children}
        </div>
    )
}