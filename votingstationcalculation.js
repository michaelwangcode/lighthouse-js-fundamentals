// This function returns stations with a capacity 20 or over of type school or community centre
const chooseStations = function (stations)
{
  let appropriateStations = [];

  for (let station of stations)
  {
    if (station[1] >= 20 && (station[2] == 'school' || station[2] == 'community centre'))
    {
      appropriateStations.push(station[0]);
    }
  }

  return appropriateStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);

console.log(chooseStations(stations));
