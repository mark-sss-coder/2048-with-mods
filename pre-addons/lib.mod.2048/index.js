//@ts-nocheck

if(!getAllAccess('Library for 2048 mods wants a full access: it needed to render a board')) {
    displayMessage('Library for 2048 mods interrupted: no full access got','error');
    throw new Error('Interrupted 2048 mods library because no full access got');
}
const modLib = {
    mergeFunc: (a, b)=>(/* a.val === b.val ? a.val * 2 : undefined */undefined),
    /**
     * @this {Pos}
     */
    moveFunc(dir) {
        /* var dat;
        switch(dir) {
            case 'd':
                dat
        } */
    }
};