import styles from './BasicInform.module.css'
import Button from '../atoms/Button'
import ButtonToggle from '../atoms/ButtonToggle'
import OverlayBox from '../atoms/OverlayBox'
import { useFormContext } from 'react-hook-form'


function BasicInform({setStep}) {

    const {
        register,
        watch,
        setValue,
        formState: { errors }
    } = useFormContext()
    

    const banner = watch('banner')
    const overlayEnabled = watch('overlayEnabled')
    const overlayTitle = watch('overlayTitle')

    const bannerPreview =
    banner?.[0]
    ?URL.createObjectURL(banner[0])
    : null

    const removeBanner = () => {
        setValue('banner', null)
    }

   
    return(
    
        <div className={styles.open}>
            <div className={styles.header}>
            <div className={styles.title}>Basic Information</div>
            </div>

            <div className={styles.border}>
            <div className={styles.container}>
                <div className={styles.item}>
                <ButtonToggle />
                </div>

                <div className={styles.select}> 
                <div className={styles.select_title}>Event Type</div>
                <select 
                className={styles.select_box}
                {...register('eventType')}>
                <option value="public">Public Event</option>
                <option value="private">Private Event</option>
                </select>
                <span className={styles.select_arrow}>
                <img src='/arrow-down.svg'/>
                </span>
                </div>

                <div className={styles.select}>
                <div className={styles.select_title}>Event Name</div>
                <div className={styles.text_container}>
                    <input 
                    className={`${styles.input_text} ${errors.eventName ? styles.input_error : ''}`}
                    placeholder="Type here"
                    type="text"
                    {...register('eventName')}
                    />

                    <span className={styles.error}>
                        {errors.eventName?.message}
                    </span>
                    
                </div>
                </div>

                <div className={styles.select_big}>
                <div className={styles.select_title}>Banner</div>
                <div className={styles.upload_banner}>
                <input 
                id="file_upload" 
                className={styles.upload_input} 
                type="file"
                {...register('banner')} />
                {bannerPreview && (
                    <div>
                    <button
                    type="button"
                    className={styles.deleteBanner}
                    onClick={removeBanner}
                    >
                        <img src="/remove-red.svg" alt="remove banner" />
                    </button>
                    
                    <img
                    src={bannerPreview}
                    alt="Banner"
                    width="100%"
                    />
                    {overlayEnabled && overlayTitle && (
                        <div className={styles.bannerTitle}>
                            {overlayTitle} </div>
                    )}
                    </div>
                )}
                {!bannerPreview && (
                <label htmlFor="file_upload" className={styles.upload_icon}>
                    <div className={styles.upload_icon}>
                        <img src='/archive-upload.svg' />
                        <p>Click or drop image</p>
                    </div>
                </label>
                )}
                </div>
                </div>

                <div className={styles.select_big}>
                <OverlayBox />
                    
            </div> 
            </div>
        </div>

            <div className={styles.controls}>
                <button className={styles.navbutton}>
                <img src="/arrow-left-gray.svg" alt="left" />
                </button>
                <button className={styles.navbutton} onClick={() => setStep(2)}>
                <img src="/arrow-right.svg" alt="Avançar" />
                </button>
            </div>
            <div className={styles.save}>
                <Button 
                    text="Next" 
                    onClick={() => setStep(2)}
                />
            </div>
        </div>
    )
       
}


export default BasicInform