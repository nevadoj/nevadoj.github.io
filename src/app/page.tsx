import Hero from "./components/content/Hero"
import Projects from "./components/content/Projects"
import Sample from "./components/content/SampleContent"
import SampleProjects from "./components/content/SampleProjects"

const HomePage = () => {
  return (
    <>
      {/* <Hero/> */}
      <Sample/>
      <SampleProjects title="Spotter" description="Simple iOS app to create fitness routines and track progress." source="asdf" languages={["Swift", "SwiftUI"]} preview=""/>
      {/* <Sample/> */}
      {/* <Projects/> */}
    </>
  )
}

export default HomePage