const POINT_TYPE = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const NATURAL_NUMBERS = [1,2,3,4,5,6,7,8,9,0];
const DATE_FORMAT_DAY_MONTH = 'DD MMM';
const DATE_FORMAT_YEAR_DAY_MONTH = 'YYYY-MM-DD';
const DATE_FORMAT_HOURS_MINUTE = 'HH:mm';
const DATE_FORMAT_YEAR_DAY_MONTH_HOURS_MINUTE = 'DD/MM/YY HH:mm';
const AUTHORIZATION = 'Basic doghdtshr6dhsge6';
const END_POINT = 'https://22.objects.htmlacademy.pro/big-trip';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const EditType = {
  CREATING: 'CREATING',
  EDITING: 'EDITING',
};

const EmptyListText = {
  EVERYTHING: 'Click New Event to create your first point',
  PAST: 'There are no past events now',
  PRESENT: 'There are no present events now',
  FUTURE: 'There are no future events now',
};

const POINT_EMPTY = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  // allDestinations: [],
  // allOffers: [],
  isFavorite: false,
  offers: [],
  // offer: {
  //   offers: []
  // },
  type: 'taxi',
};

const SortTypes = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer',
};

const enabledSortTypes = {
  [SortTypes.DAY]: true,
  [SortTypes.EVENT]: false,
  [SortTypes.TIME]: true,
  [SortTypes.PRICE]: true,
  [SortTypes.OFFER]: false,
};

const FilterTypes = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  DELETE_POINT: 'DELETE_POINT',
  CREATE_POINT: 'CREATE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

const SourceUrl = {
  POINTS: 'points',
  OFFERS: 'offers',
  DESTINATIONS: 'destinations',
};

const START_CITY_INDEX = 0;

const DESTINATION_ITEM_COUNT = 3;

export {
  END_POINT,
  AUTHORIZATION,
  DESTINATION_ITEM_COUNT,
  START_CITY_INDEX,
  POINT_TYPE,
  NATURAL_NUMBERS,
  DATE_FORMAT_DAY_MONTH,
  DATE_FORMAT_YEAR_DAY_MONTH,
  DATE_FORMAT_HOURS_MINUTE,
  DATE_FORMAT_YEAR_DAY_MONTH_HOURS_MINUTE,
  Mode,
  EmptyListText,
  FilterTypes,
  SortTypes,
  enabledSortTypes,
  UserAction,
  UpdateType,
  EditType,
  POINT_EMPTY,
  Method,
  SourceUrl,
};
