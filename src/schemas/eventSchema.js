import * as yup from 'yup'

console.log('SCHEMA CARREGADO')

export const eventSchema = yup.object({

    // Basic Information
    eventName: yup
    .string()
    .trim()
    .required('Please enter the name of the event.'),


    //Details
    Link: yup 
    .string()
    .trim()
    .url('Please enter a valid URL.')
    .required('Please enter the link. Example: https://www.google.com/'),

    EventAddress: yup
    .string()
    .required('Please enter the address of the event.'),
    
    VenueName: yup
    .string()
    .required('Please enter the venue name.'),
    
    FeatureHotelsTitle: yup
    .string()
    .required('Please enter the featured hotels title.'),

    //Dates
    taxes: yup
    .array()
    .of(
    yup.object({
        name: yup
        .string()
        .required('Please enter the tax or fee name.'),

        amount: yup
        .number()
        .typeError('Please enter a valid number for the amount.')
        .min(1, 'Please enter a value higher than 0.')
        .required('Please specify the amount.'),

        type: yup
        .string()
        .required('Please enter the tax or fee type.'),
        })
    )
    .required('Please enter at least one tax or fee.')
    .nullable(),

    
    eventDates: yup
        .array()
        .of(
          yup.object({
            startDate: yup
              .string()
              .required('Please enter the start date for the date range.'),
            endDate: yup
              .string()
              .required('Please enter the end date for the date range.'),
          })
        )
        .min(1, 'Please add at least one date range.')
        .required('Please add at least one date range.'),

    })
    
      
