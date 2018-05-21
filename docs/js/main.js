"use strict";
var Character = (function () {
    function Character() {
    }
    return Character;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.score = 0;
        this.clicks_per_second = 0;
        requestAnimationFrame(function () { return _this.gameloop(); });
    }
    Game.prototype.gameloop = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.gameloop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map