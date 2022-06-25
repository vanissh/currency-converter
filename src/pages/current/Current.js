import {useState} from 'react'
import './current.scss'

const Current = ({data}) => {

    const [currency, setCurrency] = useState(null)

    return (
       <div className="current">
           <h1>Курсы валют к рублю</h1>
            <select className='current-selector'>
                {data ? 
                data.map(item => 
                    <option 
                        value={item[1].Value} 
                        key={item[1].ID}
                        onClick={() => setCurrency(item[1].Value)}
                    >{item[1].Name}</option>
                ): null}
            </select>

            <div className="current-block">
            {currency ? currency : <div className='empty'>Здесь будет курс</div>}
            </div>
       </div>
    )
}

export default Current