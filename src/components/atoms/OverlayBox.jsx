import { useFormContext } from 'react-hook-form'
import styles from './OverlayBox.module.css'

function OverlayBox() {

    const { register, watch } = useFormContext()
    const ativo = watch('overlayEnabled')
    const eventName = watch('eventName')

    return (
        <div>
            <input className={styles.checkbox}
            type='checkbox'
            {...register('overlayEnabled')}
            />
            <label>Overlay Title on Banner</label>

            {ativo && (
                <div className={styles.select_title}>Overlay Title
                    <input
                        className={styles.input_text}
                        placeholder="Type here"
                        type="text"
                        {...register('overlayTitle')}
                    />
                </div>

            )}
        </div>
    )    
}

export default OverlayBox