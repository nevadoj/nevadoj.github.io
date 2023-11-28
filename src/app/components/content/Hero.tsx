import Container from "../layout/Container"

export default function Hero(){
  return (
    <>
      <div>
          <div className="flex justify-center lg:justify-start w-full">
              <img src="/assets/images/icon.png" alt="website icon" width={60} height={60} className="mx-12 hover:cursor-pointer pb-24 lg:pb-36"/>
          </div>
          <Container>
              <div className="flex justify-center items-start lg:justify-start">
                  <p className="text-2xl">Hello 👋</p>
              </div>
              <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                  <p className="pb-2 text-center lg:text-left lg:pt-0">My name is <span className="text-text-dark">Joseph</span>.</p>
                  <p className="text-center lg:text-left">I'm a <span className="text-text-dark">Computer Science</span> undergraduate student at <span className="text-text-dark">Simon Fraser University</span>.</p>
              </div>
          </Container>
      </div>
    </>
  )
}