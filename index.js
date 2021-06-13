const define = function() {};

var definer = new define(
  define(new function def() {
    if(define === undefined){
      define === "cannot to define this function"
    }
  })
)
  function get() {
    define(
      definer
    )
  }
  get(definer = function() {})