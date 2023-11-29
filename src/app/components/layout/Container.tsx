export default function Container({ children, }: { children: React.ReactNode }){
    return (
        <div className="flex flex-col mx-auto w-full max-w-3xl gap-6 lg:grid lg:grid-cols-[1fr,3fr]">
            {children}
        </div>
    )
}