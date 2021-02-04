import React, {useContext}  from 'react'
import {MyContext} from '../App'

export default function Stage2(){
    const context = useContext(MyContext)
    
    return(
        <>
            <div className="result_wrapper">
                <h3>E o perdedor é: </h3>
                <div>{context.result}</div>
            </div>
            <div 
                onClick={context.generateLooser} 
                className="action_button btn_2">
                SORTEAR NOVAMENTE
            </div>
            <div 
                className="action_button" 
                onClick={context.resetGame}>
                RECOMEÇAR
            </div>
        </>
    )
}