import Bottom from "../components/LandingDashboard/Bottom"
import Middle from "../components/LandingDashboard/Middle"
import Top from "../components/LandingDashboard/Top"

const LandingPage = () => {
  return (
        <div className='min-h-screen'>
            <Top />
            <Middle />
            <Bottom />
        </div>
  )
}

export default LandingPage
