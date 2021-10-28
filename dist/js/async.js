"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var jokes = document.querySelector("#new-jokes");
var clickForNewJokes = document.querySelector("#findNewJokes");
var listOfJocke = ["I went to the store to pick up eight cans of sprite... when I got home I realized I'd only picked seven up", "Why did the m&m go to school? Because it wanted to be a Smartie!", "I got fired from a florist, apparently I took too many leaves."];

var myFunction = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://icanhazdadjoke.com/", {
              headers: {
                Accept: "application/json"
              }
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function myFunction() {
    return _ref.apply(this, arguments);
  };
}();

function getJock() {
  myFunction().then(function (data) {
    jokes.textContent = data.joke;
  });
}

clickForNewJokes.addEventListener("click", getJock);
getJock();
/* const url = "https://swapi.dev/api/";
fetch(url).then((data) => console.logo(data));

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data)); */

/* const url = "https://swapi.dev/api/";
fetch(url)
  .catch((error) => console.log("BAD", error))
  .then((response) => console.log("GOOD", response)); */
//swipe js

document.querySelector("ul").addEventListener("click", function (e) {
  var li = e.target.closest("li");
  var btn = e.target.closest("button");

  if (li && li.scrollLeft === 0) {
    li.scrollBy({
      left: 1,
      behavior: "smooth"
    });
  } else if (!btn && li) {
    li.scrollBy({
      left: -1,
      behavior: "smooth"
    });
  } else if (btn && li) {
    li.remove();
  }
});