// create a random phrase builder
const cartoon = ['Kacchan', 'Killua', 'Gon', 'Goku'];
const history = ['Genghis Khan', 'Julius Caesar', 'Napoleone', 'Ghandi'];
const movie = ['Marty McFly', 'Heisenberg', 'Matt Murdock', 'Jay Kulina'];
const settings = ['Mandalor', 'Milky Way', 'The Sea of Swords', 'Hells Kitchen', 'Dark Continent'];
const actions = ['starting a revolution', 'killing the monarch', 'playing chess', 'having a vassoio'];

const wierdTrioBuilder = (cartoon, history, movie) => {
  let wierdTrio = []
  wierdTrio.push(cartoon[Math.floor(Math.random()*cartoon.length)]);
  wierdTrio.push(history[Math.floor(Math.random()*history.length)]);
  wierdTrio.push(movie[Math.floor(Math.random()*movie.length)]);
  return wierdTrio;
}

let wierdTrio = wierdTrioBuilder(cartoon, history, movie);

const plotBuilder = (trio, settings, actions) => {
  let setting = settings[Math.floor(Math.random()*settings.length)];
  let action = actions[Math.floor(Math.random()*actions.length)];
  return ` ${trio[1]}, ${trio[2]} and ${trio[0]} are ${action} in the ${setting}`;
}

console.log(plotBuilder(wierdTrio, settings, actions));
