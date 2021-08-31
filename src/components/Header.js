import Button from "./Button"
const Header = (props) => {
    return (
        <header className='header'>
            <h1>{props.title}</h1>
           {!props.btnval? <Button value='Open Form' color='Green' onClick={props.onToggle}/>:<Button value='Close Form' color='Red' onClick={props.onToggle}/>}
        </header>
    )
}

Header.defaultProps={
    title:'Task Tracker',
}

export default Header
