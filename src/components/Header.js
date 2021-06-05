import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

   
    
    return (

        <header className='header'>
            <h1>{title}</h1>
            
            <Button color = {showAdd ? 'red' : 'green'} text = {showAdd ? 'Close' : 'Add'} onClick = {onAdd}/>
            {/* <Button color = 'blue' text = 'Hello'/>
            <Button color = 'red' text = 'Hello'/> */}

        </header>
    )
}

Header.protTypes = {
    title: PropTypes.string.isRequired, 
}


// css in JS
const headingStyle = {
    color: 'red',
    backgroundColor: 'back'
}

export default Header