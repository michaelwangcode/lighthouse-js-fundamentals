const finalPosition = function (moves) {

  let x = 0;
  let y = 0;

  for (let move of moves)
  {
    if (move === 'north')
    {
      y += 1;
    }
    else if (move === 'south')
    {
      y -= 1;
    }
    else if (move === 'east')
    {
      x += 1;
    }
    else if (move === 'west')
    {
      x -= 1;
    }
  }

  return [x, y];
}