import Flight from "../../../../../assets/pictograms/Flight.svg";
import Stay from "../../../../../assets/pictograms/Stay.svg";
import Rental from "../../../../../assets/pictograms/Rental.svg";
import Event from "../../../../../assets/pictograms/Event.svg";
import Note from "../../../../../assets/pictograms/Note.svg";

const ACTIVITIES = [
  {
    type: "flight",
    pictogram: <Flight />,
    header: "City to City",
    subHeader: "Departs at 12:59 am",
  },
  {
    type: "stay",
    pictogram: <Stay />,
    header: "Hotel / Homestay Name",
    subHeader: "Bedroom Type",
  },
  {
    type: "rental",
    pictogram: <Rental />,
    header: "Rental Company Name",
    subHeader: "Vehicle Type",
  },
  {
    type: "event",
    pictogram: <Event />,
    header: "Event Name",
    subHeader: "City County",
  },
  {
    type: "note",
    pictogram: <Note />,
    header: "Note Title",
    subHeader: "Added by Patrick Star",
  },
];

export default { ACTIVITIES };
