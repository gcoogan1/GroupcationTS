import { theme } from "../../../../styles/theme"
import Durantion from "../../../../../assets/icons/Duration.svg"
import FlightDeparture from "../../../../../assets/icons/Flight_Departure.svg"
import FlightArrival from "../../../../../assets/icons/Flight_Arrival.svg"
import StayCheckIn from "../../../../../assets/icons/Stay_Check-in.svg"
import StayCheckOut from "../../../../../assets/icons/Stay_Check-out.svg"
import RentalPickUp from "../../../../../assets/icons/Rental_Pick-up.svg"
import RentalDropOff from "../../../../../assets/icons/Rental_Drop-off.svg"
import EventStart from "../../../../../assets/icons/Event_Start.svg"
import EventEnd from "../../../../../assets/icons/Event_End.svg"

const PRIMARY_ICON_COLOR = theme.color.surface.onBasePrimary
const SECONDARY_ICON_COLOR = theme.color.surface.onBaseSecondary

const ACTIVITY_INFORMATION = [
  {
    type: 'flight',
    summaryHeader: 'Airline - FN 001',
    summarySubHeader: 'Economy',
    departureIcon: <FlightDeparture color={PRIMARY_ICON_COLOR} />,
    departureHeader: '12:59 AM on Mon, 31 Jan 3000',
    departureSubHeader: 'AirportName',
    durantionIcon: <Durantion color={SECONDARY_ICON_COLOR} />,
    durantion: '9h 59m Overnight Flight',
    arrivalIcon: <FlightArrival color={PRIMARY_ICON_COLOR} /> ,
    arrivalHeader: '12:59 PM on Fri, 31 Dec 3000',
    arrivalSubheader: 'AirportName'
  },
  {
    type: 'stay',
    summaryHeader: '123 Street City, Country AB1 23C',
    departureIcon: <StayCheckIn color={PRIMARY_ICON_COLOR} /> ,
    departureHeader: 'Mon, 31 Jan 3000',
    departureSubHeader: 'Check-in at 12:59 AM',
    durantionIcon: <Durantion color={SECONDARY_ICON_COLOR} /> ,
    durantion: '9 Night Stay',
    arrivalIcon: <StayCheckOut color={PRIMARY_ICON_COLOR} /> ,
    arrivalHeader: 'Fri, 31 Dec 3000',
    arrivalSubheader: 'Check-out at 12:59 PM'
  },
  {
    type: 'rental',
    summaryHeader: 'Vehicle Rental Company Name',
    summarySubHeader: '123 Street City, Country AB1 23C',
    departureIcon: <RentalPickUp color={PRIMARY_ICON_COLOR} /> ,
    departureHeader: 'Mon, 31 Jan 3000',
    departureSubHeader: 'Pick-up at 12:59 AM',
    durantionIcon: <Durantion color={SECONDARY_ICON_COLOR} /> ,
    durantion: '9 Day Rental Period',
    arrivalIcon: <RentalDropOff color={PRIMARY_ICON_COLOR} /> ,
    arrivalHeader: 'Fri, 31 Dec 3000',
    arrivalSubheader: 'Drop-off at 12:59 PM',
    summaryFooter: 'Drop-off at the same location.'
  },
  {
    type: 'event',
    summaryHeader: '123 Street City, Country AB1 23C',
    summarySubHeader: 'User entered information regarding the event and its details.',
    departureIcon: <EventStart color={PRIMARY_ICON_COLOR} /> ,
    departureHeader: 'Mon, 31 Jan 3000',
    departureSubHeader: 'Pick-up at 12:59 AM',
    durantionIcon: <Durantion color={SECONDARY_ICON_COLOR} /> ,
    durantion: '9 Days 23 Hours',
    arrivalIcon: <EventEnd color={PRIMARY_ICON_COLOR} /> ,
    arrivalHeader: 'Fri, 31 Dec 3000',
    arrivalSubheader: 'Drop-off at 12:59 PM'
  },
  {
    type: 'note',
    details: 'User entered information for the note.'
  }
]

export default { ACTIVITY_INFORMATION }