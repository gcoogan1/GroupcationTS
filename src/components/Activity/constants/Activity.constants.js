import { theme } from "../../../styles/theme";
import Flight from "../../../../assets/pictograms/Flight.svg";
import FlightInverse from "../../../../assets/pictograms/Flight_Inverse.svg"
import Stay from "../../../../assets/pictograms/Stay.svg";
import StayInverse from "../../../../assets/pictograms/Stay_Inverse.svg"
import Rental from "../../../../assets/pictograms/Rental.svg";
import Rental_Inverse from "../../../../assets/pictograms/Rental_Inverse.svg";
import Event from "../../../../assets/pictograms/Event.svg";
import Event_Inverse from "../../../../assets/pictograms/Event_Inverse.svg";
import Note from "../../../../assets/pictograms/Note.svg";
import Note_Inverse from "../../../../assets/pictograms/Note_Inverse.svg";

/**
 * There are 5 acceptable objects based on activity type.
 * Activity types include: "flight", "stay", "rental", "event" or "note"
 * See below for reference
 */
const ACTIVITIES = [{
    type: "flight",
    pictogram: <Flight />,
    inversePictogram: <FlightInverse />, 
    header: "City to City",
    subHeader: "Departs at 12:59 am",
    backgroundColor: theme.color.flight.base,
    textColor: theme.color.flight.onBase
  },
  {
    type: "stay",
    pictogram: <Stay />,
    inversePictogram: <StayInverse />,
    header: "Hotel / Homestay Name",
    subHeader: "Bedroom Type",
    backgroundColor: theme.color.stay.base,
    textColor: theme.color.flight.onBase
  },
  {
    type: "rental",
    pictogram: <Rental />,
    inversePictogram: <Rental_Inverse />,
    header: "Rental Company Name",
    subHeader: "Vehicle Type",
    backgroundColor: theme.color.rental.base,
    textColor: theme.color.flight.onBase
  },
  {
    type: "event",
    pictogram: <Event />,
    inversePictogram: <Event_Inverse />,
    header: "Event Name",
    subHeader: "City County",
    backgroundColor: theme.color.event.base,
    textColor: theme.color.flight.onBase
  },
  {
    type: "note",
    pictogram: <Note />,
    inversePictogram: <Note_Inverse />,
    header: "Note Title",
    subHeader: "Added by Patrick Star",
    backgroundColor: theme.color.note.base,
    textColor: theme.color.note.onBase
  },
];

export default { ACTIVITIES };
