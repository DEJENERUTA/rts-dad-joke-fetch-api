"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var jokes = document.querySelector("#new-jokes");
var clickForNewJokes = document.querySelector("#findNewJokes");
var listOfJocke = [];

var myFunction = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var config, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = {
              method: "get",
              url: "https://icanhazdadjoke.com/",
              headers: {
                Accept: "application/json"
              }
            };
            _context.next = 3;
            return axios(config);

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 5:
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
    console.log(data);
    data = data.data;
    jokes.textContent = data.joke;
  });
}

clickForNewJokes.addEventListener("click", getJock);
getJock(); //swipe js

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