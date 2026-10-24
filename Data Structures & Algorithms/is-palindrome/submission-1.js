class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(str) {
          var s = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  var l = 0
  var r = s.length - 1
  
  console.log(s)
  while (l < r) {
    if (s[l] == s[r]) {
      l++;
      r--;
    }

    else {
      return false
    }
  }

  return true
    }
}
