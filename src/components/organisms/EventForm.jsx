import BasicInform from './BasicInform'
import Details from './Details'
import Dates from './Dates'
import NavBar from '../NavBar'
import Header from '../Header'
import { useState } from 'react'
import { useForm, FormProvider} from 'react-hook-form'
import styles from './EventForm.module.css'
import { yupResolver } from '@hookform/resolvers/yup'
import { eventSchema } from '../../schemas/eventSchema'


function EventForm() {

    const [step, setStep] = useState(1)
    const methods = useForm({
        resolver: yupResolver(eventSchema),

        defaultValues: {
            eventStatus: 'enable',

            minimumNights: 1,

            bookableDates: [null, null],

            eventDates: [
                {
                    dates: [null,null]
                }
            ],
            
            checkInOutDates: [null,null],

            taxes: [
                {
                    name:'',
                    amount: 1,
                    type: 'fixed'
                }
            ]
        }
    })
    console.log(methods.formState.errors)


    const onSubmit = (data) => {
       console.log('SUBMIT')
        console.log(data)
    }

    const onError = (errors) => {
       alert('ERRO no submit')
        console.log(errors)

        if (errors.eventName) {
            setStep(1)
        }

        if (
            errors.Link ||
            errors.EventAdress ||
            errors.VenueName ||
            errors.FeatureHotelsTitle
         ) {
            setStep(2)
            return
        }
    }

    return(
        <>
        <FormProvider {...methods} >
        < Header />

        <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
          <div className={styles.layout}>
                <div className={styles.leftSpacer} />

            <div className={styles.navCol}>
                <NavBar
                step={step}
                setStep={setStep}
                />
            </div>

            <div className={styles.contentCol}>
            {step === 1 && <BasicInform setStep={setStep} />}
            {step === 2 && <Details setStep={setStep} />}
            {step === 3 && <Dates setStep={setStep} />}
            </div>
          </div>
        </form>


         </FormProvider>
         </>
    )
}

export default EventForm