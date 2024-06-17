//Type of user input (prop: type)
const TYPES = ["text", "select", "date"];

// Search list (prop: searchData)
const ITEMS_SEARCH = [
  {
    itemLabel: "Paris",
    itemSubLabel: "Item Sub-Label",
    itemIcon: <Placeholder color={theme.color.surface.onBasePrimary} />,
  },
  {
    itemLabel: "Berlin",
    itemSubLabel: "Item Sub-Label",
    itemIcon: <Placeholder color={theme.color.surface.onBasePrimary} />,
  },
];

// Type of select input (prop: selectType)
const SELECT_TYPES = ["user", "multiSelect", "select"];

// Select items list if selectType is select/multiSelect (prop: selectList)
const ITEMS_SELECT = [
  { itemLabel: "item label", itemValue: "1", isDisabled: false },
  { itemLabel: "item label", itemValue: "2", isDisabled: false },
  { itemLabel: "item label", itemValue: "3", isDisabled: false },
];

// Select items (user )list if selectType is user (prop: selectList)
const ITEMS_USER = [
  {
    fullName: "User Label",
    userAvatar: "",
    userInitials: "HG",
    isDisabled: false,
  },
  {
    fullName: "User Null",
    userAvatar: "image.url", // must be valid link
    userInitials: "ki",
    isDisabled: false,
  },
];

// Start date data (prop: startDateData)
const START_DATE_DATA = {
  name: 'arrival',
  label: 'Input label',
  initialDate: '04/12/2024',
  helperText: 'helper text',
  isDisabled: false,
  isError: false
}

// End date data (prop: endDateData)
const END_DATE_DATA = {
  name: 'departure',
  label: 'Input label',
  initialDate: '04/16/2024',
  helperText: 'helper text',
  isDisabled: false,
  isError: false
}
