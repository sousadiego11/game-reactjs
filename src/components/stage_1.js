import React, {useState, useContext, useRef} from 'react'
import {MyContext} from '../App'
import { Button, Form, Alert } from 'react-bootstrap'

export default function Stage1(){
    const textInput = useRef()
    
    const context = useContext(MyContext)
    
    const [error, setError] = useState([
        false, ''
    ])

    const handleSubmit = (event)=> {
        event.preventDefault()
        const inputValue = textInput.current.value
        const validate = validarInput(inputValue)

        if(validate){
            setError([false, ''])
            textInput.current.value = ''
            context.handleAddPlayer(inputValue)
        }

    }

    const validarInput = (value)=> {
        if (value.trim() === ''){
            setError([true, 'Por favor, insira algum participante! :('])
            return false
        }

        return true
    }

    console.log(context.players)

    return(
        <>
        <Form className="mt-4" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Insira o nome do participante :D"
                    name="jogador"
                    ref={textInput}
                />
            </Form.Group>
            {error[0] ?
                <Alert variant="danger">{error[1]}</Alert>
            :null}
            <Button className="miami" variant="primary" type="submit" >
                +1 Jogador
            </Button>
            {context.players.length > 0 ?
                <>
                    <hr/>
                    <div>
                        <ul className="list-group">
                            {context.players.map((item, index)=>
                            (
                                <li key={index} 
                                className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                                >
                                    {item}
                                <span 
                                    className="badge badge-danger" 
                                    onClick={()=>context.handleRemovePlayer(index)}>
                                    x
                                </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="action_button" onClick={context.handleNext}>PRÓXIMO !</div>
                </>
            :null}
        </Form>
        </>
    )
}