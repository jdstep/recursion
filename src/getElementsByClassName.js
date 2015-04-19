// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // holds the matched HTML elements for a given class
  var matchedChildren = [];

  // returns true if a class is present for a given node
  var classPresent = function(node, targetClass) {
    var i;
    var nodeClassList;

    if (node.classList === undefined) {
     return false;
    }

    nodeClassList = node.classList;

    for (i = 0; i < nodeClassList.length; i+=1) {
      if (nodeClassList[i] === targetClass) {
        return true;
      }
    }

    return false;
    };

  // recursively finds all children matching a certain clas of a given node
  // can likely be refactored to separate out the traversing function for later re-usability
  var findMatchedChildren = function(currentNode) {
    var allChildren;

    if (classPresent(currentNode, className)) {
      matchedChildren.push(currentNode);
    }

    if (currentNode.nodeType === 1) {
      allChildren = currentNode.childNodes;

      for (var i = 0; i < allChildren.length; i+=1) {
        findMatchedChildren(allChildren[i]);
      }
    }
   
  };

  findMatchedChildren(document.body);

  return matchedChildren;
};
