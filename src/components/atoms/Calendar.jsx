import styles from './Calendar.module.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller, useFormContext } from 'react-hook-form'

function Calendar ({ name, hasError, errorMessage }) {

    const { control } = useFormContext()

    return(
        <Controller
            name={name}
            control={control} 
            render={({field}) => {
            const [startDate, endDate ] = field.value || [null, null]

                return (
                    <div>
                    <DatePicker 
                    className={`${styles.input} ${hasError ? styles.input_error : ''}`}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(dates) => field.onChange(dates)}
                    selectsRange
                    monthsShown={2}
                    placeholderText='MM/DD/YYYY - MM/DD/YYYY'
                    />

                    {hasError && (
                        <span className={styles.error}>
                        {errorMessage}
                    </span>
                    )}
                </div>
            )

        }}
    />

    )
}

export default Calendar