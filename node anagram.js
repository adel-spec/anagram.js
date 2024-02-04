function groupAnagrams(arr) {
    const result = [];
    const anagramMap = {};
  
    for (let i = 0; i < arr.length; i++) {
      const sortedString = arr[i].split('').sort().join('');
  
      if (anagramMap[sortedString]) {
        anagramMap[sortedString].push(arr[i]);
      } else {
        anagramMap[sortedString] = [arr[i]];
      }
    }
  
    for (const key in anagramMap) {
      result.push(anagramMap[key]);
    }
  
    return result;
  }
  
  const arr = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
  console.log(groupAnagrams(arr));