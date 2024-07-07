function Node(i, j, canvas_size, col_row_length) {
  this.w = canvas_size / col_row_length;
  this.px = i * this.w;
  this.py = j * this.w;
  
  this.x = i;
  this.y = j;
  
  this.f = Number.MAX_VALUE;
  this.g = Number.MAX_VALUE;
  
  this.box_color = color(255, 255, 255);
  
  this.init = function (){
    fill(this.box_color);
    rect(this.px, this.py, this.w);
  }
  
  this.color = function (new_color) {
    this.box_color = new_color;
    this.init();
  }
  
  this.findNeighbours = function (current, grid) {
    let neighbours = [];
    let directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1],  
        [-1, 1], [-1, -1], [1, -1], [1, 1]  
    ];

    for (let direction of directions) {
        let newX = current.x + direction[0];
        let newY = current.y + direction[1];

        // Check if the new coordinates are within the grid bounds
        if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length) {
          
            neighbours.push(grid[newX][newY]);
        }
      
    }
    return neighbours;
  }
}

