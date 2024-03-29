import Container from "../layout/Container"
import Image from "next/image"

export default function Explore(){
    return(
        <>
            <Container>
                <div className="flex flex-col items-center lg:items-start lg:justify-start">
                    <p className="text-2xl">explore</p>
                </div>

                <div className="flex flex-col items-center lg:items-start">
                    <div className="flex flex-col items-center lg:items-start pb-4">
                        <Image src="/assets/images/Loc.svg" alt="location" className="lg:-translate-x-2"/>
                        <p className="text-text-dark pt-2">vancouver, bc</p>
                        <a href="/assets/res.pdf" target="_blank">
                            <p className="text-text-dark underline hover:cursor-pointer pt-2">resume</p>
                        </a>
                    </div>

                    <div className="flex flex-row pb-8 pt-1">
                        <a href="mailto:josephnevado12@gmail.com" target="_blank" rel="noreferrer">
                            <Image src="/assets/images/Mail.svg" alt="email" className="pr-4 hover:cursor-pointer"/>
                        </a>

                        <a href="https://linkedin.com/in/joseph-nevado" target="_blank" rel="noreferrer">
                            <Image src="/assets/images/Linkedin.svg" alt="linkedin" className="pr-4 hover:cursor-pointer" />
                        </a>

                        <a href="https://github.com/nevadoj" target="_blank" rel="noreferrer">
                            <Image src="/assets/images/Github.svg" alt="github" className="hover:cursor-pointer" />
                        </a>
                    </div>
                </div>
            </Container>
        </>
    )
}