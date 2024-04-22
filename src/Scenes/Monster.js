class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        this.aKey = this.input.keyboard.addKey('A');
        this.dKey = this.input.keyboard.addKey('D');
        this.sKey = this.input.keyboard.addKey('S');
        this.fKey = this.input.keyboard.addKey('F');

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.arm1 = this.add.sprite(this.bodyX-90, this.bodyY+50, "monsterParts", "arm_greenD.png");
        my.sprite.arm1.flipX = true;
        my.sprite.arm2 = this.add.sprite(this.bodyX+90, this.bodyY+50, "monsterParts", "arm_greenD.png");
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY-30, "monsterParts", "eye_psycho_dark.png");
        my.sprite.leg1 = this.add.sprite(this.bodyX-40, this.bodyY+150, "monsterParts", "leg_greenA.png");
        my.sprite.leg1.flipX = true;
        my.sprite.leg2 = this.add.sprite(this.bodyX+40, this.bodyY+150, "monsterParts", "leg_greenA.png");
        my.sprite.fang = this.add.sprite(this.bodyX, this.bodyY+40, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY+40, "monsterParts", "mouthA.png");
        my.sprite.fang.visible = false;
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if (this.aKey.isDown) {
            for (let bodyPart in my.sprite) {
                my.sprite[bodyPart].x -= 1;
            }
        }

        if (this.dKey.isDown) {
            for (let bodyPart in my.sprite) {
                my.sprite[bodyPart].x += 1;
            }
       }

       if (this.sKey.isDown) {
            my.sprite.smile.visible = true;
            my.sprite.fang.visible = false;
       }

       if (this.fKey.isDown) {
        my.sprite.smile.visible = false;
        my.sprite.fang.visible = true;
   }
    }

}