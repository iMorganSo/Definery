Definery = class{
  constructor(definer) {
    this.definer = function() {
      this.definer = function() {};
    }
  }
}

Definery.definer = function() {
  Definery.definer = this.definer
}

definer = function() {
  definer = Definery.definer
}

definer(console.log("connected with the definer"))