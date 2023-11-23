export default function Hero(){
  return (
    <>
      <div className="flex flex-col items-center sm:items-start w-full">
        <img src="/assets/images/icon.png" alt="website icon" width={60} height={60} className="mx-12 hover:cursor-pointer"/>

        <div className="flex flex-col justify-center items-center w-full pt-24 min-w-5/6 sm:flex-row sm:pt-36">
          
          <p className="text-2xl sm:px-20">Hello 👋</p>
          
          <div className="flex flex-col sm:px-20">
            <p className="pt-6 pb-2 text-center sm:text-left">My name is <span className="text-text-dark">Joseph</span>.</p>
            <p className="text-center sm:text-left">I'm a <span className="text-text-dark">Computer Science</span> undergraduate student at <span className="text-text-dark">Simon Fraser University</span>.</p>
          </div>

        </div>
      </div>
    </>
  )
}