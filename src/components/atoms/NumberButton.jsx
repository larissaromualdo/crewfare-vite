import styles from './NumberButton.module.css'


function NumberButton({ value, setValue }) {

    const incrementar = () => {
        setValue(prev => prev + 1)
    }

    const decrementar = () => {
        if (value > 1) {
            setValue(prev => prev - 1)
        }
    }


    return(
        <div className={styles.text_container}>
                <input 
                className={styles.input_text}
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                min="1"
                step="1"
                /> 

                <div className={styles.input_number}>
                <button 
                type="button" 
                className={styles.input_number_button_top}
                onClick={incrementar}
                 >
                    <svg
                    width= "16"
                    height="16"
                    viewBox="0 0 512 512"
                    fill="rgb(79, 246, 177)"
                    >
                    <path d="M 508.788 371.087 L 263.455 125.753 c -4.16 -4.16 -10.88 -4.16 -15.04 0 L 2.975 371.087 c -4.053 4.267 -3.947 10.987 0.213 15.04 c 4.16 3.947 10.667 3.947 14.827 0 l 237.867 -237.76 l 237.76 237.76 c 4.267 4.053 10.987 3.947 15.04 -0.213 C 512.734 381.753 512.734 375.247 508.788 371.087 Z"/>
                    </svg>
                </button>  
                <button 
                type="button" 
                className={styles.input_number_button_down} 
                onClick={decrementar}>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 512 512"
                        fill="rgb(79, 246, 177)"
                        style={{ transform: 'rotate(180deg)' }}
                    >
                    <path d="M 508.788 371.087 L 263.455 125.753 c -4.16 -4.16 -10.88 -4.16 -15.04 0 L 2.975 371.087 c -4.053 4.267 -3.947 10.987 0.213 15.04 c 4.16 3.947 10.667 3.947 14.827 0 l 237.867 -237.76 l 237.76 237.76 c 4.267 4.053 10.987 3.947 15.04 -0.213 C 512.734 381.753 512.734 375.247 508.788 371.087 Z" />
                    </svg>
                </button>       
            </div>
        </div>         
    )

}
export default NumberButton