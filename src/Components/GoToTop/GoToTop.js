import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// This component is a button for going up when you scroll down in the app
const GoToTop = (props) => {
  return (
    <a className='scroll-top' title='Go Top'>
      {/* <i className='fa fa-angle-up'></i> */}
      <FontAwesomeIcon className='ielement' icon={faAngleUp} />
    </a>
  )
}

export default GoToTop
