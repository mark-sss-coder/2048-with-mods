// ==============================================
//  ____    ____            ____
//      |  |    |  |    |  |    |
//  ____|  |    |  |____|  |____|
// |       |    |       |  |    |
// |____   |____|       |  |____|
// 
// ROTATE
// 
// ==============================================
// 
// ==============================================
// TYPE: PRESET ADDON;
// BY: MARK-SSS;
// GAME BY: MARK-SSS;
// ----------------------------------------------
// mark-sss's game
// ==============================================


(function() {
    if((getAddons().length==2? !(
        getAddons().filter(v=>!v.id==='rotate.2048')[0].id=='cancel.button') : true)&&getAddons().length>1)
    {
        displayMessage("Please turn off mods except [2048 Rotate]. If you want, you can use [Cancel Button] mod (that is compatible with [2048 Rotate])",'error');
        throw new Error();
    }

    modLib.mergeFunc = (a,b)=>(a.val === b.val ? a.val * 2 : undefined);
    modLib.moveFunc = /** @this {Pos} */function (dir,isClockwise,sec) {
        sec
    };

    var sectors = {
        /* up */    u: [], // UP
        /* right */ r: [], // RIGHT
        /* down */  d: [], // DOWN
        /* left */  l: []  // LEFT
    };

    modLib.genSectors = ({height:h,width:w})=>{
        sectors = {
            /* up */    u: [], // UP
            /* right */ r: [], // RIGHT
            /* down */  d: [], // DOWN
            /* left */  l: []  // LEFT
        };
        
        let isPlanet = h%2==1&&w%2==1; // whether a planet at center needed

    };
})();