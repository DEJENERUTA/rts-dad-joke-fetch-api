"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var jokes = document.querySelector("#new-jokes");
var clickForNewJokes = document.querySelector("#findNewJokes");

function getJock() {
  return _getJock.apply(this, arguments);
}

function _getJock() {
  _getJock = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var jokeData, joke;
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
            jokeData = _context.sent;
            _context.next = 5;
            return jokeData.json();

          case 5:
            joke = _context.sent;
            jokes.textContent = joke.joke;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getJock.apply(this, arguments);
}

getJock();
clickForNewJokes.addEventListener("click", getJock);