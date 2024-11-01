var grid_size_px = 400;
var gridManager;
var grid;
function setup() {
  createCanvas(500, 450);
  background(220);
  // generate new grid
  gridManager = new GridManager();
  grid = gridManager.createGrid();
  gridManager.createObstacleNodes(0.6);
  let startingNode = gridManager.createStartingNode();
  let targetNode = gridManager.createTargetNode();
  
  a_star = new A_Star(startingNode, targetNode, grid);
  
  var userInteractions = new User();
  userInteractions.StartAlgorithmButton();
  userInteractions.GuessPathButton();
  userInteractions.DrawObstaclesButton();
  
  loop();
}

function draw(new_a_star) {
  a_star.calculate();


}
