var FPSmeter = (function () {
    function FPSmeter() {
        if (select('.fpsmeter') == null) {
            this.container = createDiv('0 FPS');
            this.container.addClass('fpsmeter');
        }
    }
    FPSmeter.prototype.show = function (frames) {
        this.container.html(frames.toFixed(1) + ' FPS');
    };
    FPSmeter.prototype.tick = function (frames) {
        if (frames == null) {
            frames = frameRate();
        }
        if (frameCount % 16 == 0) {
            this.show(frames);
        }
    };
    return FPSmeter;
}());
//# sourceMappingURL=fpsmeter.js.map