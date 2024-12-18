import React, {Component} from 'react'
import './button.css'



class Button extends Component {
    render(){
        return <button className='btn' onClick={() => alert(`A label desse Botão é ${Button.defaultProps.label}`)}>{this.props.label}</button>
    }
}
Button.defaultProps = {
    label: 'clique Aqui'
}

export default Button