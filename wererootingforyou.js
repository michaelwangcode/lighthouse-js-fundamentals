const judgeVegetable = function (vegetables, metric) 
{
  let bestSubmitter = "";
  let bestCharacteristic = 0;

  for (const i in vegetables)
  {
    if (vegetables[i][metric] > bestCharacteristic)
    {
      bestCharacteristic = vegetables[i][metric];
      bestSubmitter = vegetables[i]['submitter'];
    }
  }

  return bestSubmitter;
}



const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));