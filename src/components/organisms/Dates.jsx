import styles from './Dates.module.css'
import Button from '../atoms/Button'
import NumberButton from '../atoms/NumberButton'
import Calendar from '../atoms/Calendar'
import { useFormContext, useFieldArray } from 'react-hook-form'

function Dates({setStep}) {

     const {
        register,
        control,
        formState: { errors }
    } = useFormContext()
     
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'taxes'
    })
    const {
        fields: eventFields,
        append: appendEvent,
        remove: removeEvent
    } = useFieldArray({
        control,
        name: 'eventDates'
    })

    return(
    <div className={styles.conteudo}>
    <div className={styles.open}>


        <div className={styles.header}>
            <div className={styles.title}>Dates</div>
        </div>

        <div className={styles.border}>
        <div className={styles.card}>
        <div className={styles.container}>


                <div className={styles.title_dates}>
                    <div className={styles.select_title}>Bookable Start & End Dates</div>
                </div>
    
                <div className={styles.calendar}>
                <div className={styles.text_container}>

                    <div className={styles.calendar_container}>
                   
                    <Calendar 
                    name="bookableDates"
                    />

                    <img 
                    alt="calendar" 
                    className={styles.calendar_ico}
                    src= './calendar.svg'
                    />
                    </div>
                </div>
                </div>

                <div className={styles.title_dates}>
                    <div className={styles.select_title}>Event Start and End Dates</div>
                </div>


            <div className={styles.calendar}>
                <div className={styles.text_container}>

                    <div className={styles.calendar_container}>
                        {eventFields.map((field, index) => (
                        <div key={field.id} className={styles.eventDate}>

                        <div className={styles.calendar}>
                            <div className={styles.text_container}>
                            <div className={styles.calendar_container}>
                        <Calendar 
                        name={`eventDates.${index}.dates`}
                        hasError={!!errors.eventDates?.[index]?.dates?.message}
                        errorMessage={errors.eventDates?.[index]?.dates?.message}
                        />

                        <span className={styles.error}>
                            {errors.eventDates?.[index]?.dates?.message}
                            </span>

                        <img 
                        alt="calendar" 
                        className={styles.calendar_ico}
                        src= './calendar.svg'
                        />
                        </div>
                        </div>
                    

                        {index > 0 && (
                        <button
                        type="button"
                        className={styles.remove}
                        onClick={() => removeEvent(index)}
                         >

                        <img 
                        src="/remove-red.svg" 
                        alt="Remove tax" />
                        </button>
                        )}
                    </div>
                    </div>
                    ))}
                
                </div>
                </div>  

            <div className={styles.select_add}>
               <button
                type="button"
                className={styles.select_add}
                onClick={() => {
                    appendEvent({ dates: [null, null] })

                }}
                >
                <img alt="add_icon" className={styles.add_more_button} src="./add-green.svg" />
                <div className={styles.text_add_more_button}>Add Event Date Range</div>
                </button>
                   
            </div>
            </div>

            <div className={styles.title_dates}>
                    <div className={styles.select_title}>Default Check-In & Check-Out Dates</div>
                </div>

                
            <div className={styles.calendar}>
                <div className={styles.text_container}>

                    <div className={styles.calendar_container}>
                        <Calendar name="checkInOutDates" />

                      
                        <span className={styles.error}>
                            {errors.checkInOutDates?.startDate?.message}
                        </span>

                         <span className={styles.error}>
                            {errors.checkInOutDates?.endDate?.message}
                        </span>

                        <img 
                        alt="calendar" 
                        className={styles.calendar_ico}
                        src= './calendar.svg'
                        />
                    </div>
                </div>
            </div>

             <div className={styles.title_dates}>
                    <div className={styles.select_title}>Taxes & Fees</div>
                </div>

                    {fields.map((field, index) => (
                    <div key={field.id} className={styles.container_tree}>


                    <div className={styles.item_tree}>
                        <div className={styles.select_title}>Name</div>

                        <div className={styles.text_container_tree}>
                            <input
                            className={`${styles.input_text} ${errors.taxes?.[index]?.name ? styles.input_error : '' }`}
                            {...register(`taxes.${index}.name`)}
                            />
                            <span className={styles.error}>
                            {errors.taxes?.[index]?.name?.message}
                            </span>
                        </div>
                    </div>

                    <div className={styles.item_four}>
                        <div className={styles.select_title}>Amount</div>
                            <NumberButton 
                            name={`taxes.${index}.amount`}
                            hasError={!!errors.taxes?.[index]?.amount}
                            />
                            <span className={styles.error}>
                                {errors.taxes?.[index]?.amount?.message}
                            </span>
                    </div>

                    <div className={styles.item_four}>
                        <div className={styles.select_title}>Type</div>
                            <select className={styles.select_box}
                            {...register(`taxes.${index}.type`)}>
                                <option value="fixed">Fixed</option>
                                <option value="percentage">Percentage</option>
                            </select>
                            <span className={styles.select_arrow}>
                                <img src='/arrow-down.svg'/>
                            </span>
                    </div>
                    <button
                    type="button"
                    className={styles.remove}
                    onClick={() => remove(index)}
                    >
                    <img src="/remove-red.svg" alt="Remove tax" />
                    </button>
                </div>
                    ))}
            </div>
            
           
            <button
                type="button"
                className={styles.select_add}
                onClick={() => append({ name: '', amount: 1, type: 'fixed' })}
            >
                <img
                alt="add_icon"
                className={styles.add_more_button}
                src='./add-green.svg'
                 /> 
                <div className={styles.text_add_more_button}>Add New Tax/Fee</div>   
            </button>
            

            </div>

            <div className={styles.controls}>
                <button className={styles.navbutton} onClick={() => setStep(2)}>
                <img src="/arrow-left.svg" alt="Anterior" />
                </button>
                <button className={styles.navbutton}>
                <img src="/arrow-right-gray.svg" alt="right" />
                </button>
            </div>
            <div className={styles.save}>
                <Button 
                    type="submit"
                    text="Save" 
                />
             
       </div>
        </div>
       </div>
    </div>
    )
}


export default Dates
