
// import PropTypes from 'prop-types'

const Header = ({text = 'FeedBack UI'}) => {
  return (
    <header>
        <div className="container">
        <h2>{text}</h2>
        </div>
    </header>
  )
}

// Header.defaultProps = {
//     text: 'FeedBack UI',
// }

// Header.PropTypes = {
//     text: String,
// }



export default Header
