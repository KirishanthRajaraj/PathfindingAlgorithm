function setup() {
  var canvas_size = 400;
  createCanvas(canvas_size, canvas_size);
  background(220);
  
  var col_row_length = 50;
  var grid = new Array(col_row_length);
  
  for(let i = 0; i < grid.length; i++) {
    grid[i] = new Array(col_row_length);
  }
  
  // create and render boxes
  for(let i = 0; i < col_row_length; i++) {
    for(let j = 0; j < col_row_length; j++) {
      grid[i][j] = new Node(i, j, canvas_size, col_row_length);
      grid[i][j].init();
    }
  }
  
  // set random starting node
  
  let starting_range = 0.3 * col_row_length;
  var startingNode = grid[int(random(0, starting_range))][int(random(0, starting_range))];
  startingNode.color(color(0, 255, 0));
  startingNode.g = 0;
  
  
  // set random target node
  
  let ending_range = 0.7 * col_row_length;
  var targetNode = grid[int(random(ending_range, col_row_length))][int(random(ending_range, col_row_length))];
  targetNode.color(color(255, 0, 0));
    
  let a_star = new A_Star(startingNode, targetNode, grid);
  a_star.calculate();
}


function draw() {

}