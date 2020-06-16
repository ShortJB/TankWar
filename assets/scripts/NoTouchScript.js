cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {

        //var self = this;
        // touch input
        // this._listener = cc.eventManager.addListener({
        //     event: cc.EventListener.TOUCH_ONE_BY_ONE,
        //     onTouchBegan: function(touch, event) {
        //         //截获事件
        //         event.stopPropagation();
        //         return true;
        //     },
        //     onTouchMoved: function(touch, event) {
        //         //截获事件
        //         event.stopPropagation();
        //     },
        //     onTouchEnded: function(touch, event) {
        //         //截获事件
        //         event.stopPropagation();
        //     }
        // }, self.node);

        this.node.on("touchstart", this.onTouchBegan, this);
        this.node.on("touchmove", this.onTouchMoved, this);
        this.node.on("touchend", this.onTouchEnded, this);

        //按键按下
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, 
                        function (event) {
                            //截获事件
                            event.stopPropagation();
                        }, this);
        //按键抬起
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, 
                        function (event){
                            //截获事件
                            event.stopPropagation();
                        }, this);

    },

    onTouchBegan: function (event) {
        event.stopPropagation();
        return true;
    },

    onTouchMoved: function (event) {
        event.stopPropagation();
    },

    onTouchEnded: function (event) {
        event.stopPropagation();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

    onDestroy() {
        this.node.off("touchstart", this.onTouchBegan, this);
        this.node.off("touchmove", this.onTouchMoved, this);
        this.node.off("touchend", this.onTouchEnded, this);
    },
});
