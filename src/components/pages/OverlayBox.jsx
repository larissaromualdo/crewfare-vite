import { useState } from 'react'
import styles from './OverlayBox.module.css'

function OverlayBox() {

    const [ativo, setAtivo] = useState(true)

    return (
        <div>
            <input
            type='checkbox'
            checked={ativo}
            onChange={() => setAtivo(!ativo)}
            />
            <label>Overlay Title on Banner</label>

            {ativo && (
                <div className={styles.select_title}>Overlay Title
                    <input
                        className={styles.input_text}
                        placeholder="Type here"
                        type="text"
                    />
                </div>

            )}
        </div>
    )    
}

export default OverlayBox