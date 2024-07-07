function A_Star(startingNode, targetNode, grid) {
  let openSet = [];
  openSet.push(startingNode);
  
  // came from
  
  this.calculate = function() {
  
    
    while (openSet.length != 0) {
      var currentNode = getNodeWithLowestFScore(openSet);
      if(JSON.stringify(currentNode) === JSON.stringify(targetNode) ) {
        console.log('finished');
      }
      
      openSet.remove(currentNode);
      
      let neighbours = currentNode.findNeighbours(currentNode, grid);
      
      
    }

  }
}

function distNeighbours(nodeA, nodeB) {
    return Math.sqrt(Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2));
}

function getNodeWithLowestFScore(openSet) {
  let lowestFNode = openSet[0];
  for (let node of openSet) {
    if (node.f < lowestFNode.f) {
      lowestFNode = node;
    }
  }
  return lowestFNode;
}

Array.prototype.remove = function(item) {
  const index = this.indexOf(item);
  if (index !== -1) {
    this.splice(index, 1);
  }
  return this;
};