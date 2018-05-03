document.addEventListener("DOMContentLoaded", function() {
    var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
    document.body.appendChild(app.view);

    // 枠線で囲う
    app.renderer.view.style.border = "1px solid black";

    // 文字を表示
    var basicText = new PIXI.Text("hoge", {fontFamily : "Arial", fontSize: 50, fill : 0x000000, align : "center"});
    basicText.anchor.set(0.5, 0.5);
    basicText.position.set(Math.floor(TILE_WIDTH / 2), Math.floor(TILE_WIDTH / 2));
    stage.addChild(basicText);

    // ベクターで円を表示
    var graphics = new PIXI.Graphics();
    graphics.lineStyle(1);
    graphics.beginFill(0xFFFFFF, 0.5);
    graphics.drawCircle(Math.floor(TILE_WIDTH / 2), Math.floor(TILE_WIDTH / 2), Math.floor(TILE_WIDTH / 2));
    graphics.endFill();
    stage.addChild(graphics);

    // 円をボタン風味に
    graphics.interactive = true;
    graphics.on("click", onDown);
    graphics.on("tap", onDown);

    function onDown(stage) {
        alert("call");
    }

    //rendererのviewをDOMに追加
    document.body.appendChild(renderer.view);
    //レンダラに`stageを描画させる
    renderer.render(stage);

}, false);
