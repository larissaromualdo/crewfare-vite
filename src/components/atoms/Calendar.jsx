import styles from './Calendar.module.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'

function Calendar () {

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const onChange = (dates) => {
        console.log(dates)
        const [start, end] = dates

        setStartDate(start)
        setEndDate(end)
    }

    console.log("comeco",startDate, "final",endDate)

    return(
        <DatePicker 
            className={styles.input}
            startDate={startDate}
            endDate={endDate}
            onChange={onChange}
            selectsRange
            monthsShown={2}
            placeholderText='MM/DD/YYYY - MM/DD/YYYY'
        />

    )
}

export default Calendar