const defaultTrailImages = [
  "https://images.unsplash.com/photo-1564417510515-b3d20c821653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1560199738-3d933bc1e714?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1602837266926-88a54164668b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTU2fHx0cmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1584492100332-b0eaad7652fe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjAzfHx0cmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1577849363105-277286958f92?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA1fHx0cmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1589064090574-7be967916250?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjgzfHx0cmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];

export const randomImage = function () {
  const randomIndex = Math.floor(Math.random() * defaultTrailImages.length);
  console.log(defaultTrailImages[randomIndex]);
  return defaultTrailImages[randomIndex];
};
