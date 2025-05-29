import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"
import Projects from "./Projects"

const Body = ({ skillsRef, educationRef, experienceRef, projectsRef }) => {
  return (
    <div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={educationRef}><Education /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={projectsRef}><Projects /></div>
    </div>
  )
}

export default Body