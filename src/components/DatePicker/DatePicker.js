import { useMemo, useState } from "react";
import { View } from "react-native";
import { CalendarList } from "react-native-calendars";
import { isBefore, eachDayOfInterval, parseISO, format } from "date-fns";

import DatePickerConstants from "./constants/DatePicker.constants";

/**
 * This component renders a date picker in the form of a calander.
 * @prop {boolean} isRange optional -> if true then a date range may be selected
 * @prop {string} initialStartDate optional -> sets the initial start date or event date
 * @prop {string} initialEndDate optional -> ONLY sets the initial end date if there is an initial start
 * date and isRange is true
 * @prop {function} onDatePress optional -> event that is fired when a day is pressed
 * @returns {ReactElement} Renders a calander with selectable dates.
 *
 * @example
 * <DatePicker
 *  isRange
 *  initialStartDate={'2024-04-09'}
 *  initialEndDate={'2024-04-11'}
 *  onDatePress={() => console.log("Clicked!")}
 *  />
 */
const DatePicker = ({
  isRange,
  initialStartDate,
  initialEndDate,
  onDatePress,
}) => {
  const validEndDate = !!initialStartDate && isRange && initialEndDate;
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(validEndDate);

  const setDateRanges = (date) => {
    if (!!startDate) {
      if (isBefore(date, startDate)) {
        setEndDate();
        return setStartDate(date);
      }
      if (!endDate && isRange) {
        return setEndDate(date);
      }
    }
    setStartDate(date);
    setEndDate();
  };

  const getDateRanges = useMemo(() => {
    if (startDate && !endDate) {
      return {
        [startDate]: {
          ...DatePickerConstants.START_DATE_STYLES,
        },
      };
    }

    if (!!startDate && !!endDate) {
      const startDateParsed = parseISO(startDate);
      const endDateParsed = parseISO(endDate);

      const dateRange = eachDayOfInterval({
        start: startDateParsed,
        end: endDateParsed,
      })
        .map((date) => format(new Date(date), "yyyy-MM-dd"))
        .reduce((acc, val) => {
          if (val === startDate) {
            acc[val] = {
              ...DatePickerConstants.START_DATE_STYLES,
            };
          } else if (val === endDate) {
            acc[val] = {
              ...DatePickerConstants.END_DATE_STYLES,
            };
          } else {
            acc[val] = {
              ...DatePickerConstants.RANGE_DATE_STYLES,
            };
          }
          return acc;
        }, {});
      return dateRange;
    }
  }, [startDate, endDate]);

  return (
    <View style={{ height: 300 }}>
      <CalendarList
        theme={{
          ...DatePickerConstants.THEME_STYLES,
        }}
        calendarWidth={300}
        markingType={"period"}
        markedDates={getDateRanges}
        onDayPress={(day) => {
          setDateRanges(day.dateString);
          if (!!onDatePress) return onDatePress();
        }}
        scrollEnabled={true}
      />
    </View>
  );
};

export default DatePicker;
