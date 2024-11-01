let guessPathActive = false;
let drawObstActive = false;
var gridGuessPath;
var startingNodeGuessPath;
var targetNodeGuessPath;
var startingNode;
var targetNode;

function User() {
  this.StartAlgorithmButton = function (noObstacles) {
    startButton = createButton("Start Algorithm!");
    startButton.position(410, 10);
    startButton.style("font-family", "Comic Sans MS");
    startButton.style("font-size", "12px");
    
    startButton.mouseClicked(() => {

      if (drawObstActive) {
        new A_Star(startingNode, targetNode, grid).calculate();
        loop();
      } else {
        setup();
      }
      drawObstActive = false;
    });
  };

  this.GuessPathButton = function () {
    guessButton = createButton("Guess optimal Path");
    guessButton.position(410, 50);
    guessButton.mouseClicked(() => {
      guessPathActive = true;
      console.log(guessPathActive);
      let grid_manager = new GridManager();
      gridGuessPath = grid_manager.createGrid();
      grid_manager.createObstacleNodes(0.6);
      startingNodeGuessPath = grid_manager.createStartingNode();
      targetNodeGuessPath = grid_manager.createTargetNode();
    });
  };

  this.DrawObstaclesButton = function () {
    drawObstButton = createButton("Draw Obstacles");
    drawObstButton.position(410, 90);
    drawObstButton.mouseClicked(() => {
      drawObstActive = true;
      grid = gridManager.createGrid();
      startingNode = gridManager.createStartingNode();
      targetNode = gridManager.createTargetNode();
    });
  };
}

function mouseDragged() {
  if (guessPathActive) {
    for (let i = 0; i < col_row_length; i++) {
      for (let j = 0; j < col_row_length; j++) {
        if (
          mouseX > grid[i][j].px &&
          mouseX < grid[i][j].px + grid_size_px / col_row_length &&
          mouseY > grid[i][j].py &&
          mouseY < grid[i][j].py + grid_size_px / col_row_length
        ) {
          if (!grid[i][j].isObstacle) {
            grid[i][j].color(color(0, 255, 255));
          }
        }
      }
    }
  }
  if (drawObstActive) {
    for (let i = 0; i < col_row_length; i++) {
      for (let j = 0; j < col_row_length; j++) {
        if (
          mouseX > grid[i][j].px &&
          mouseX < grid[i][j].px + grid_size_px / col_row_length &&
          mouseY > grid[i][j].py &&
          mouseY < grid[i][j].py + grid_size_px / col_row_length
        ) {
          if (!grid[i][j].isObstacle) {
            grid[i][j].isObstacle = true;
            grid[i][j].color(color(0));
          }
        }
      }
    }
  }
}

function mouseReleased() {
  
  if (guessPathActive) {
  console.log("active");
    
    new A_Star(
      startingNodeGuessPath,
      targetNodeGuessPath,
      gridGuessPath
    ).calculate();
    loop();
    guessPathActive = false;
  }
}

function evaluateGuessedPath(guessedPath, actualPath) {}
