import { Text, View } from 'react-native'
import ActivityCard from '../Activity/ActivityCard/ActivityCard'
import { itineraryDayStyles } from './ItineraryDay.styles'

//TODO: Check date format

/**
 * This component renders a list activities for a specific day.
 * @prop {number} day required -> day count of activity
 * @prop {string} date required -> date of activity (format: Friday, May 6th)
 * @prop {array} activities required -> array of objects that contain activity data.
 * See activity constants for reference of objects.
 *
 * @returns {ReactElement} Renders a Itinerary Day.
 *
 * @example <ItineraryDay day={1} date={'Friday, Dec 13th'} activities={ACTIVITIES}/>
 */
const ItineraryDay = ({ day, date, activities }) => {
  return (
    <View style={itineraryDayStyles.container}>
      <View style={itineraryDayStyles.dateContainer}>
        <Text style={itineraryDayStyles.dayText}>Day {day}</Text>
        <Text style={itineraryDayStyles.dateText}>{date}</Text>
      </View>
      <ActivityCard activities={activities} />
    </View>
  )
}

export default ItineraryDay