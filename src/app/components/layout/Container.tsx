export default function Container({ children, }: { children: React.ReactNode }){
    return (
        <div className="flex flex-col w-full lg:grid lg:grid-cols-12 lg:px-52">
            {children}
        </div>
    )
}