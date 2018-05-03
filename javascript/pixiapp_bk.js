document.addEventListener("DOMContentLoaded", function() {
    TILE_WIDTH = 256;
    TILE_HEIGHT = 256;

    // redererを作成
    var renderer = PIXI.autoDetectRenderer(TILE_WIDTH, TILE_HEIGHT, {
        backgroundColor: 0x01099ff,
    });
    // 枠線で囲う
    renderer.view.style.border = "1px solid black";

    //`stage`を作成
    var stage = new PIXI.Container();

    // 文字を表示
    var basicText = new PIXI.Text("a", {fontFamily : "Arial", fontSize: 50, fill : 0x000000, align : "center"});
    basicText.anchor.set(0.5, 0.5);
    basicText.position.set(Math.floor(TILE_WIDTH / 2), Math.floor(TILE_WIDTH / 2));
    stage.addChild(basicText);

    // ベクターで円を表示
    var graphics = new PIXI.Graphics()
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

    //`stage`を作成
    var stage2 = new PIXI.Container();

    //rendererのviewをDOMに追加
    document.getElementById("td2").appendChild(renderer2.view);


    //rendererのviewをDOMに追加
    document.getElementById("td1").appendChild(renderer.view);
    //レンダラに`stageを描画させる
    renderer.render(stage);
    renderer.render(stage2)

}, false);
