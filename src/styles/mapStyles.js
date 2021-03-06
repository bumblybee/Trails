const mapStyles = [
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        hue: "#fe7762",
      },
      {
        gamma: 1,
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        hue: "#B1CE7C",
      },
      {
        saturation: 25.4,
      },
      {
        lightness: -25.4,
      },
      {
        gamma: 1,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        hue: "#53FF00",
      },
      {
        saturation: -73,
      },
      {
        lightness: 40,
      },
      {
        gamma: 1,
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "all",
    stylers: [
      {
        hue: "#FBFF00",
      },
      {
        gamma: 1,
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "all",
    stylers: [
      {
        hue: "#00FFFD",
      },
      {
        lightness: 30,
      },
      {
        gamma: 1,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        hue: "#00BFFF",
      },
      {
        saturation: 4,
      },
      {
        lightness: 2,
      },
      {
        gamma: 1,
      },
    ],
  },
];

export default mapStyles;
