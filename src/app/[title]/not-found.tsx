import Link from "next/link"

export default function notFoundPage(){
    return(
        <div className="flex flex-col justify-center items-center">
            <p>project not found</p>
            <Link href="/">
                <p className="text-text-dark underline hover:cursor-pointer pt-2">back</p>
            </Link>
        </div>
    )
}