import './converter.scss'
import src from '../../arrow.png'

const Converter = () => {
    return (
        <div className="converter">
            <h1>Конвертер валют</h1>

            <div className="converter-wrapper">
                <div className="in-block">
                    <label htmlFor="myCurrencyIn">У меня есть:</label>
                    <input list="currencyIn" id="myCurrencyIn" className="currency-input"/>
                    <datalist id="currencyIn">
                    </datalist>
                    <input type="text" className="calc-block input-block" />
                </div>
                <div className="arrow">
                    <img src={src} alt="arrow" />
                </div>
                 <div className="out-block">
                    <label htmlFor="myCurrencyOut">Хочу приобрести:</label>
                    <input list="currencyOut" id="myCurrencyOut" className="currency-input"/>
                    <datalist id="currencyOut">
                    </datalist>
                    <input type="text" className="calc-block output-block" />
                </div>
            </div>





        </div>
    )
}

export default Converter