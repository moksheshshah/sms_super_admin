import { environment } from "../../environments/environment";

/* eslint-disable @typescript-eslint/naming-convention */
export const CONSTANTS = {

  message: {
    INITIAL: 'Please enter search criteria and hit search button.',
    INTERNAL_ERROR: 'Oops Something went wrong..!',
    INTERNAL_SERVER_ERROR: 'Oops Internal Server error..!',
    NETWORK_ERROR: 'Oops! Connection/Network error..!'
  },

  errorCodes: {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND_HTTP_EXCEPTION: 404,
    PERMISSION_DENIED: 404,
    METHOD_NOT_FOUND: 405,
    ALREADY_EXISTS: 406,
    DATABASE_INITIALIZATION_FAIL: 407,
    ERROR_CODE_VALIDATION_FAILED: 422,
    INVALID_DOMAIN: 433,
    TOKEN_EXPIRED: 466,
    TOKEN_REQUIRED: 477,
    INTERNAL_SERVER_ERROR: 500
  },

  productDefaultImage: './assets/images/default_product.png',
  userDefaultImage: './assets/images/unknown-user.png',
  defaultImage: './assets/images/dummy-image.jpg',
  importUsersDemoUrl: 'global/importusers.csv',

  baseImageUrl: environment.baseImageURL,
  appUrl: environment.appURL,

  languagesJSONFileName: {
    US_ENGLISH: 'us-english',
    EUROPE_FRENCH: 'ep-french',
    INDIA_HINDI: 'in-hindi',
    GERMANY_GERMAN: 'ge-german',
    CHINA_MANDARIN: 'ch-mandarin',
    THAILAND_THAI: 'th-thai'
  },

  editorConfig: {
    toolbar: [
      'heading', '|',
      'fontsize', 'fontfamily', '|',
      'fontColor', 'fontBackgroundColor', '|',
      'bold', 'italic', 'underline', 'strikethrough', '|',
      'alignment', '|',
      'outdent', 'indent', '|',
      'numberedList', 'bulletedList', '|',
      'link', 'mediaembed', 'blockquote', 'insertTable', '|',
      'undo', 'redo'
    ],
    mediaEmbed: { previewsInData: true },
    table: { contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'] },
    language: 'en',
    alignment: { options: ['left', 'right', 'center', 'justify'] },
    fontSize: { options: ['tiny', 'small', 'default', 'big', 'huge'] },
    fontColor: {
      columns: 6,
      colors: [
        { color: '#f05a28', label: 'Theme Orange', class: 'orange' },
        { color: 'hsl(0, 0%, 0%)', label: 'Black' },
        { color: 'hsl(0, 0%, 30%)', label: 'Dim grey' },
        { color: 'hsl(0, 0%, 60%)', label: 'Grey' },
        { color: 'hsl(0, 0%, 90%)', label: 'Light grey' },
        { color: 'hsl(0, 0%, 100%)', label: 'White', hasBorder: true },
        { color: '#f8696b', label: 'Red 1' },
        { color: '#FFD800', label: 'Yellow 1' },
        { color: '#63be7b', label: 'Green 1' },
        { color: '#f44336', label: 'Red 2' },
        { color: '#ff9100', label: 'Yellow 2' },
        { color: '#4caf50', label: 'Green 2' },
        { color: 'hsl(0, 75%, 60%)', label: 'Red' },
        { color: 'hsl(30, 75%, 60%)', label: 'Orange' },
        { color: 'hsl(60, 75%, 60%)', label: 'Yellow' },
        { color: 'hsl(90, 75%, 60%)', label: 'Light green' },
        { color: 'hsl(120, 75%, 60%)', label: 'Green' },
        { color: 'hsl(150, 75%, 60%)', label: 'Aquamarine' },
        { color: 'hsl(180, 75%, 60%)', label: 'Turquoise' },
        { color: 'hsl(210, 75%, 60%)', label: 'Light blue' },
        { color: 'hsl(240, 75%, 60%)', label: 'Blue' },
        { color: 'hsl(270, 75%, 60%)', label: 'Purple' }
      ]
    },
    fontBackgroundColor: {
      columns: 6,
      colors: [
        { color: '#f05a28', label: 'Theme Orange' },
        { color: 'hsl(0, 0%, 0%)', label: 'Black' },
        { color: 'hsl(0, 0%, 30%)', label: 'Dim grey' },
        { color: 'hsl(0, 0%, 60%)', label: 'Grey' },
        { color: 'hsl(0, 0%, 90%)', label: 'Light grey' },
        { color: 'hsl(0, 0%, 100%)', label: 'White', hasBorder: true },
        { color: '#f8696b', label: 'Red 1' },
        { color: '#FFD800', label: 'Yellow 1' },
        { color: '#63be7b', label: 'Green 1' },
        { color: '#f44336', label: 'Red 2' },
        { color: '#ff9100', label: 'Yellow 2' },
        { color: '#4caf50', label: 'Green 2' },
        { color: 'hsl(0, 75%, 60%)', label: 'Red' },
        { color: 'hsl(30, 75%, 60%)', label: 'Orange' },
        { color: 'hsl(60, 75%, 60%)', label: 'Yellow' },
        { color: 'hsl(90, 75%, 60%)', label: 'Light green' },
        { color: 'hsl(120, 75%, 60%)', label: 'Green' },
        { color: 'hsl(150, 75%, 60%)', label: 'Aquamarine' },
        { color: 'hsl(180, 75%, 60%)', label: 'Turquoise' },
        { color: 'hsl(210, 75%, 60%)', label: 'Light blue' },
        { color: 'hsl(240, 75%, 60%)', label: 'Blue' },
        { color: 'hsl(270, 75%, 60%)', label: 'Purple' }
      ]
    }
  },

  eventTypeObj: {
    b2b: 0,
    public_party: 1
  },

  eventTypeArr: [
    { value: 'b2b', label: 'B2B', displayLabel: 'B2B' },
    { value: 'public_party', label: 'Public Party', displayLabel: 'PP' }
  ],

  // verticalLocationsObj: {
  //   TOP: 0,
  //   CENTER: 1,
  //   BOTTOM: 2
  // },

  // verticalLocationsArr: [
  //   {value: 'TOP', label: 'Top'},
  //   {value: 'CENTER', label: 'Center'},
  //   {value: 'BOTTOM', label: 'Bottom'}
  // ],

  verticalLocationsObj: {
    NONE: 0,
    FRONT: 1,
    MIDDLE: 2,
    BACK: 3
  },

  verticalLocationsArr: [
    { value: 'NONE', label: 'None' },
    { value: 'FRONT', label: 'Front' },
    { value: 'MIDDLE', label: 'Middle' },
    { value: 'BACK', label: 'Back' }
  ],

  horizontalLocationsObj: {
    NONE: 0,
    LEFT: 1,
    CENTER: 2,
    RIGHT: 3,
  },

  horizontalLocationsArr: [
    { value: 'NONE', label: 'None' },
    { value: 'LEFT', label: 'Left' },
    { value: 'CENTER', label: 'Center' },
    { value: 'RIGHT', label: 'Right' },
  ],

  seatObj: {
    NONE: 0,
    VVIP: 1,
    VIP: 2,
    Platinum: 3,
    Gold: 4,
    Silver: 5,
    Season_Single_Pass: 6,
    Season_Couple_Pass: 7,
    Khelaiya_Single_Pass: 8,
    Khelaiya_Couple_Pass: 9
  },

  seatArr: [
    { value: 'NONE', label: 'None' },
    { value: 'VVIP', label: 'VVIP' },
    { value: 'VIP', label: 'VIP' },
    { value: 'Platinum', label: 'Platinum' },
    { value: 'Gold', label: 'Gold' },
    { value: 'Silver', label: 'Silver' },
    { value: 'Season Single Pass', label: 'Season Single Pass' },
    { value: 'Season Couple Pass', label: 'Season Couple Pass' },
    { value: 'Khelaiya Single Pass', label: 'Khelaiya Single Pass' },
    { value: 'Khelaiya Single Pass', label: 'Khelaiya Single Pass' },

  ],

  discountTypeObj: {
    percentage: 0,
    rupee: 1
  },

  discountTypeArr: [
    { value: 'percentage', label: 'Percentage', displayLabel: '%' },
    { value: 'rupee', label: 'Rupee', displayLabel: '₹' }
  ],

  offerTypeObj: {
    unlimited: 0,
    limited: 1
  },

  offerTypeArr: [
    // {value: 'offer', label: 'Unlimited Person'},
    { value: 'unlimited_person', label: 'Unlimited Person' },
    { value: 'limited_person', label: 'Limited Person' }
  ],

  offerrTypeArr: [
    { value: 'offer_on_all_products', label: 'Offer On All Product' },
    { value: 'offer_on_specific_profuct', label: 'Offer On Specific Product' }
  ],

  userType: {
    EVENT_USERS: 0,
    SHOP_USERS: 1,
    ONLINE_OFFER_USERS: 2,
    LIVE_STREAM_USERS: 3,
    ALL_USERS: 4,
    EXISTING_USERS: 5,
  },

  userTypeArr: [
    { value: 'eventusers', url: '/assets/images/event-user.png', type: 'Event User' },
    { value: 'shopusers', url: '/assets/images/shope-user.png', type: 'Shop User' },
    { value: 'onlineofferusers', url: '/assets/images/online-shop-user.png', type: 'online shop offers user' },
    { value: 'livestreamusers', url: '/assets/images/live-streaming-user.png', type: 'live streaming user' },
    { value: 'allusers', url: '/assets/images/all-user.png', type: 'All User' },
    { value: 'existingusers', url: '/assets/images/existing-user.png', type: 'Existing User' }
  ],

  adsGalleryVideoList: [
    { title: 'Music Event', offer: '250', link: 'https://festumeventos3.s3.ap-south-1.amazonaws.com/global/videos/music_event.mp4' },
    { title: 'Festum Evento Festival', offer: '250', link: 'https://festumeventos3.s3.ap-south-1.amazonaws.com/global/videos/festum_evento_festivel_video.mp4' },
    { title: 'Clothing Store', offer: '250', link: 'https://festumeventos3.s3.ap-south-1.amazonaws.com/global/videos/clothing_store.mp4' },
    { title: 'Footwear store', offer: '250', link: 'https://festumeventos3.s3.ap-south-1.amazonaws.com/global/videos/footwear_store.mp4' },
    { title: 'Jewelry store', offer: '250', link: 'https://festumeventos3.s3.ap-south-1.amazonaws.com/global/videos/jwellery_store.mp4' },
    { title: 'Men Salon', offer: '250', link: 'https://festumeventos3.s3.ap-south-1.amazonaws.com/global/videos/mens_salon.mp4' },
    { title: 'Watch Store', offer: '250', link: 'https://festumeventos3.s3.ap-south-1.amazonaws.com/global/videos/watch_store.mp4' },
  ],

  entities: [
    { entityname: 'event', value: 'event' },
    { entityname: 'offer', value: 'offer' },
    { entityname: 'livestream', value: 'livestream' },
  ],

  eventStepsArr: [
    {
      label: 'Add Event',
      routerLink: 'add-event'
    },
    {
      label: 'About Event',
      routerLink: 'about-event'
    },
    {
      label: 'Arrangement',
      routerLink: 'arrangement'
    },
    {
      label: 'Location',
      routerLink: 'location'
    },
    {
      label: 'Photos & Videos',
      routerLink: 'photos-and-videos'
    },
    {
      label: 'Permission',
      routerLink: 'permission'
    },
    {
      label: 'Discount',
      routerLink: 'discount'
    },
    {
      label: 'Company Details',
      routerLink: 'company-details'
    },
    {
      label: 'Personal Details',
      routerLink: 'personal-details'
    },
    {
      label: 'Terms & Conditions',
      routerLink: 'terms-and-conditions'
    }
  ],

  maxPosterSizeInMB: 10,
  maxImageSizeInMB: 7,
  maxIconSizeInKB: 500,
  maxVideoSizeInMB: 256,
  maxCompanyVideoSizeInMB: 2,
  defaultMapZoom: 12,
  latitude: 21.228125,
  longitude: 72.833771,
  googleMapApiKey: 'AIzaSyDLgr8YB5IK8dBIEWClexZGzXaB7UlVm7Q',

  maxOfferOnAllProductsLimit: 7,

  // CK Editor Character limit
  CKEditorCharacterLimit0: 500,
  CKEditorCharacterLimit1: 1000,
  CKEditorCharacterLimit2: 2000,
  CKEditorCharacterLimit3: 3000,
  
  imagearray: ['image/avif', 'image/webp', 'image/png', 'image/jpeg', 'image/gif', 'image/bmp', 'image/vnd.microsoft.icon', 'image/tiff', 'image/svg+xml'],

  videoarray: ['video/x-f4v','video/x-matroska','video/x-msvideo', 'video/mp4', 'video/webm', 'audio/webm', 'video/3gpp', 'audio/3gpp', 'video/3gpp2', 'audio/3gpp2', 'video/x-ms-wmv', 'video/quicktime', 'video/MP2T', 'video/x-flv'],

  docarray: ['application/zip', 'text/plain', 'application/vnd.rar', 'application/pdf', 'text/csv',
    'application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint',
    'application/x-tar', 'application/vnd.oasis.opendocument.presentation',
    'application/vnd.oasis.opendocument.spreadsheet', 'application/vnd.oasis.opendocument.text',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/x-7z-compressed'
  ]
};