// function accepts an objects and returns an array
// of all the values in the object that have a typeof string

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

function collectStrings(obj) {}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
