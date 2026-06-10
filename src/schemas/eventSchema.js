import * as yup from 'yup'

export const eventSchema = yup.object({

    // Basic Information
        eventStatus: yup //ButtonToggle - validação apenas de segurança.
        .string()
        .oneOf(
        ['enable', 'disable'],
        'Please select a valid event status.'
        )
    .required(),

        eventType: yup //validação apenas de segurança.
        .string()
        .oneOf(
          ['public', 'private'],
          'Please select a valid event type.'
        )
        .required('Please enter the event type.'),

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

    minimumNights: yup
    .number()
    .typeError('Please enter a valid number.')
    .min(1, 'Minimum nights must be at least 1.')
    .required('Please enter the minimum number of nights.'),
    //validação apenas para que o usuário nao envie o formulário com valor menor que 1.

    //Dates
    eventDates: yup
    .array()
    .of(
    yup.object({
      dates: yup
        .array()
        .test(
          'complete-range',
          'Please enter the start and end date for the date range.',
          value => !!value?.[0] && !!value?.[1]
        )
    })
    )
    .min(1, 'Please add at least one date range.')
    .required('Please add at least one date range.'),


    bookableDates: yup
    .array()
    .test(
    'complete-range',
    ('Please enter the bookable start and end dates.'),
    (value) => !!value?.[0] && !!value?.[1]
    )
    .required('Please specify the bookable dates.'),


    checkInOutDates: yup
    .array()
    .test(
    'complete-range',
    ('Please enter the checkIn start and end dates.'),
    (value) => !!value?.[0] && !!value?.[1]
    )
    .required('Please specify the check-in/out dates.'),

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
        .oneOf(
          ['fixed', 'percentage'],
          'Please select a valid tax type.'
        )
        .required('Please enter the tax or fee type.')
    })
    )
    .min(1, 'Please, enter at least one tax or fee.') 
    .required('Please enter at least one tax or fee.')
    .nullable()

    })