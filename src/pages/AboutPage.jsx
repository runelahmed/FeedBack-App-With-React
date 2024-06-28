import Card from "../shared/Card";
import { Link } from "react-router-dom";
import {FaHome} from 'react-icons/fa'
const AboutPage = () => {
  return (
    <Card>
        <div className="about">
            <h2>About this Project</h2>
            <p>This a React app to leave feedback for a product or services</p>
            <p>Version: 1.0.8</p>
            <Link to="/" style={{textDecoration: 'none'}}><FaHome/> Back to home</Link>
        </div>
    </Card>
  )
}

export default AboutPage
