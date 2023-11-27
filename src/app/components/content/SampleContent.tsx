import Container from "../layout/Container"

export default function Sample(){
    return(
        <>
            <div>
                <div className="flex justify-center lg:justify-start w-full">
                    <img src="/assets/images/icon.png" alt="website icon" width={60} height={60} className="mx-12 hover:cursor-pointer pb-24 lg:pb-36"/>
                </div>
                <Container>
                    <div className="flex justify-center items-center lg:justify-center lg:items-center lg:col-span-5">
                        <p className="text-2xl lg:pl-16">Hello 👋</p>
                    </div>
                    <div className="flex flex-col lg:justify-start lg:items-start lg:col-span-7">
                        <p className="p-1 pt-6 text-center lg:text-left lg:pt-1">My name is <span className="text-text-dark">Joseph</span>.</p>
                        <p className="p-1 text-center lg:text-left">I'm a <span className="text-text-dark">Computer Science</span> undergraduate student at <span className="text-text-dark">Simon Fraser University</span>.</p>
                    </div>
                </Container>
            </div>
        </>
    )
}