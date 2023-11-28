import Container from "../layout/Container"

export default function Explore(){
    return(
        <>
            <Container>
                <div className="flex flex-col items-center lg:items-start lg:justify-start">
                    <p className="text-2xl">Explore</p>
                </div>

                <div className="flex flex-col items-center lg:items-start">
                    <div className="flex flex-col items-center lg:items-start pb-4 pt-1">
                        <img src="/assets/images/Loc.svg" alt="location" className="lg:-translate-x-2"/>
                        <p className="text-text-dark pt-2">Vancouver, BC</p>
                    </div>

                    <div className="flex flex-row pb-8 pt-1">
                        <img src="/assets/images/Mail.svg" alt="email" className="pr-4 hover:cursor-pointer"/>
                        <img src="/assets/images/Linkedin.svg" alt="linkedin" className="pr-4 hover:cursor-pointer" />
                        <img src="/assets/images/Github.svg" alt="github" className="hover:cursor-pointer" />
                    </div>
                </div>
            </Container>
        </>
    )
}