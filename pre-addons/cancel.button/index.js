const cancel = (function() {
    const cancel = ()=>{board = board.custom.history.pop();};
    addButton({
        title: "Cancel",
        img: './icon.svg',
        onclick: ()=>cancel(board)
    });

    register('move',(event)=>{
        if(!board.custom.history) board.custom.history = [];
        board.custom.history.push(event.oldPos);
    });

    return cancel;
})();