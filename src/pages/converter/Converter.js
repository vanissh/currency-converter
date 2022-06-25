import './converter.scss'
import { useState } from 'react'
import src from '../../arrow.png'

const Converter = ({data}) => {

    const [inValue, setInValue] = useState(null)
    const [outValue, setOutValue] = useState(null)
    const [userValue, setUserValue] = useState(null)
    const [result, setResult] = useState(null)

    const toConvert = () => {
        if(userValue && outValue && inValue){
            let result = (inValue/outValue) * +userValue

            setResult(result.toFixed(3))
        }
    }

    return (
        <div className="converter">
            <h1>Конвертер валют</h1>

            <div className="converter-wrapper">
                <div className="in-block">
                    <select className='converter-selector'>
                        {data ? options(data, setInValue): null}
                    </select>
                    <input type="text" className="calc-block input-block" onChange={e => setUserValue(e.target.value)}/>
                </div>
                <div className="arrow">
                    <img src={src} alt="arrow" onClick={toConvert}/>
                </div>
                 <div className="out-block">
                    <select className='converter-selector'>
                        {data ? options(data, setOutValue): null}
                    </select>
                    <div type="text" className="calc-block output-block">{result ? result : ''}</div>
                </div>
            </div>
        </div>
    )
}

export default Converter

const options = (data, setValue) => {
    return (
        data.map(item =>
            <option 
                value={item[1].Value} 
                key={item[1].ID}
                onClick={() => setValue(item[1].Value)}
            >{item[1].Name}</option>
        )
    )
}