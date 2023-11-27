export default function Container({ children, }: { children: React.ReactNode }){
    return (
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:px-52">
            {children}
        </div>
    )
}