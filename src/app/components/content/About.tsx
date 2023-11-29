import Container from "../layout/Container"

export default function About(){
    return(
        <>
            <Container>
                <div className="flex justify-center items-start lg:justify-start">
                <p className="text-2xl">about</p>
                </div>
                
                <div className="flex flex-col justify-start items-start">
                    <p className="pb-4 text-left lg:pt-0">Aspiring developer. Interested in design and how it evokes emotion. Currently exploring <span className="text-text-dark">iOS development</span>.</p>
                    <p className="text-left">Outside of programming, I enjoy playing guitar, listening to music and messing around with mechanical keyboards.</p>
                </div>
            </Container>
        </>
    )
}