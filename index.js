// code your solution here
function superbowlWin (record) {
    const result = record.find(object => object.result === 'W');
    if (result) {
        return result.year
    }
  
}