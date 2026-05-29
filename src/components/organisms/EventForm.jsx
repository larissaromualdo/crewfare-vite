import BasicInform from './BasicInform'
import Details from './Details'
import Dates from './Dates'
import NavBar from '../NavBar'
import { useForm } from 'react-hook-form'
import { useState } from 'react'



function EventForm() {

    const [step, setStep] = useState(1)

    return(
        <>
        < NavBar 
        step={step}
        setStep={setStep}
        />

        {step === 1 && <BasicInform />}
        {step === 2 && <Details />}
        {step === 3 && <Dates />}
        </>
    )
}

export default EventForm