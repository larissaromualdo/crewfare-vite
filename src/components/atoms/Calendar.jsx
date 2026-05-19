import styles from './Calendar.module.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'

function Calendar () {

    const [data, setData] = useState(null)

    return(
        <DatePicker className={styles.input}
        selected={data}
        onChange={(date) => setData(date)}
        placeholderText='MM/DD/YYYY - MM/DD/YYYY'
        />
    )
}

export default Calendar