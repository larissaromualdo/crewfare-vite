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

    const steps = [
        { 
        id: 1, 
        label: "Basic Information",
        fields: ["eventStatus", "eventName","eventType"]
        },

        { 
        id: 2, 
        label: "Details",
        fields: ["Link", "EventAddress","VenueName","FeatureHotelsTitle","minimumNights"]
        },

        { 
        id:3,
        label: "Dates",
        fields: ["eventDates","bookableDates","checkInOutDates","taxes"]
        }]

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
    const {
        trigger,
        formState: { errors }
    } = methods

    const [stepIndex, setStepIndex] = useState(0)

    const goToStep = async (nextIndex) => {
    const currentStep = steps[stepIndex]
    const isValid = await trigger(currentStep.fields)
    if (!isValid) return
    setStepIndex(nextIndex)
    }

    const onSubmit = (data) => {
    alert('Thank you for submitting your information!')
    }

    const onError = (errors) => {
    console.log(errors)
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
                steps={steps}
                goToStep={goToStep}
                stepIndex={stepIndex}
                errors={errors}
                />
            </div>

            <div className={styles.contentCol}>
            {stepIndex === 0 && <BasicInform setStepIndex={setStepIndex} />}
            {stepIndex === 1 && <Details setStepIndex={setStepIndex} />}
            {stepIndex === 2 && <Dates setStepIndex={setStepIndex} />}
            </div>
          </div>
        </form>


         </FormProvider>
         </>
    )
}

export default EventForm
