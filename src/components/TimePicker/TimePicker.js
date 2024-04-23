import { useEffect, useState } from "react";
import { Platform, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNDateTimePicker from "@react-native-community/datetimepicker";

/**
 * This component renders a time picker in the form of a spinner.
 * @prop {string} initialTome optional -> initial time to be displayed, MUST be in ISO format
 * @prop {string} onTimeChange optional -> event that is fired when a time is picked
 * @returns {ReactElement} Renders a time picker.
 *
 * @tip If you want to format time to '05:43:00-04:00',
 * use formatISO(selectedTime, { representation: "time" })
 * @note Value for RNDateTimePicker & DateTimePicker MUST be in date format (ex. new Date())
 *
 * @example
 * <TimePicker
 *   initialTime={'2024-04-23T08:43:00.000Z'}
 *   onTimeChange={() => console.log("hello")}
 *  />
 */
const TimePicker = ({ initialTime, onTimeChange }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (initialTime) setTime(new Date(initialTime));
  }, [initialTime]);

  const handleTimeChange = (event, selectedTime) => {
    setTime(new Date(selectedTime));
    if (!!onTimeChange) onTimeChange();
  };

  return (
    <View>
      {Platform.OS === "android" ? (
        <View>
          <RNDateTimePicker
            onChange={handleTimeChange}
            value={time}
            display="spinner"
            mode="time"
          />
        </View>
      ) : (
        <View>
          <DateTimePicker
            onChange={handleTimeChange}
            value={time}
            display="spinner"
            mode="time"
          />
        </View>
      )}
    </View>
  );
};

export default TimePicker;
