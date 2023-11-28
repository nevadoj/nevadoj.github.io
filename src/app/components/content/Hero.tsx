import Link from "next/link"
import Container from "../layout/Container"

export default function Hero(){
  return (
    <>
      <Container>
          <div className="flex justify-center items-start lg:justify-start">
              <p className="text-2xl">Hello 👋</p>
          </div>
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <p className="pb-2 text-center lg:text-left lg:pt-0">My name is <span className="text-text-dark">Joseph</span>.</p>
              <p className="text-center lg:text-left">I'm a <span className="text-text-dark">Computer Science</span> undergraduate student at <span className="text-text-dark">Simon Fraser University</span>.</p>
          </div>
      </Container>
    </>
  )
}