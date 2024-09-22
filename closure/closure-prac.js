function name(count) {
  // 'name' creates a local variable 'count' and defines an inner function 'name2'
  // This sets up a closure because 'name2' has access to 'count', even after 'name' finishes

  function name2() {
    // 'name2' can still access and modify 'count' because of the closure
    count++;
    // Each time 'name2' is called, the updated 'count' is logged to the console
    console.log(count);
  }

  // 'name' returns the inner function 'name2', which keeps a reference to 'count' (closure)
  return name2;
}

// By calling 'name(1)', we create a closure where 'count' starts at 1
// The returned 'name2' function (now stored in 'counter') has access to 'count'
var counter = name(1);

// When we call 'counter()', it runs 'name2', which uses the 'count' from the closure
counter(); // Output: 2 (closure allows 'name2' to access and increment 'count' from 'name')
counter(); // Output: 3 (closure persists, so 'count' keeps increasing)
counter(); // Output: 4 (closure continues to maintain the value of 'count' across calls)
