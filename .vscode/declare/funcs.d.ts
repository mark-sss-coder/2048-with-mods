//@ts-check
type RegisterListener<Id extends string> = (event: RegisterType[Id]['values']) => RegisterType[Id]['return'];
type Tiles = {[X: number]: {[Y: number]: Tile}};
type TileValue = {
    [k: string]: any
};
interface RegisterType {
    move: {values:{oldPos:Pos,newPos:Pos,params:object},return:void|false},
    quit: {values:{lastPos:Pos},return:void},
    play: {values:{},return:void},
    tryMove: {values:{oldPos:Pos},return:void|{weight:number,newPos:Pos}},
    restart: {values:{width:number,height:number,oldPos:Pos,newPos:Pos,oldScore:number},return:void}
    [K: string&{}]: {values:object,return:any}
}
interface Tile {
    /**
     * The `Tile` data
     * 
     * **2048 Website**
     */
    data: TileValue
}
/**
 * The board position of 2048 game. Can be more than one instance
 * 
 * **2048 Website**
 */
declare class Pos {
    /**
     * Makes a `Pos` that has selected `width`, `height`, and (optional) `tiles`
     * 
     * **2048 Website**
     */
    constructor(width: number,height: number,tiles?: Tiles);
    /**
     * Constructs a `Pos` that is a copy of other `Pos` instance
     * 
     * Use it in registered event listeners - don't break the board positions
     * 
     * **2048 Website**
     */
    constructor(pos:Pos);
    /**
     * Calles a `tryMove` event listeners of a `Pos`
     * 
     * After calling `tryMove` and getting a result, calles `move`
     * 
     * **2048 Website**
     */
    move(params:object): void;
    /**
     * Registers a listener for `Pos`
     * 
     * **2048 Website**
     */
    register: typeof register;
    /**
     * Register an event for `Pos`
     * 
     * **2048 Website**
     */
    registerEvent: typeof registerEvent;
    /**
     * Emit an event for `pos`
     * 
     * **2048 Website**
     */
    emitEvent: typeof emitEvent;

    /**
     * Board custom data
     * 
     * Will be saved when saving/exporting board
     * 
     * **2048 Website**
     */
    custom: object;

    /**
     * The board data
     * 
     * Format: Pos.prototype.data[X][Y]
     * 
     * **2048 Website**
     */
    data: Tiles
}
/**
 * Registers a function in selected `id` of listener.
 * 
 * If a function were registered before, returns false
 * 
 * **2048 Website**
 */
declare function register<Id extends keyof typeof registered>(id: Id, func: RegisterListener<Id>|RegisterListener<Id>[]): boolean;
/**
 * Stores all registered listeners
 * 
 * **2048 Website**
 */
declare var registered: {
    move: RegisterListener<'move'>[],
    quit: RegisterListener<'quit'>[],
    play: RegisterListener<'play'>[],
    tryMove: RegisterListener<'tryMove'>[],
    restart: RegisterListener<'restart'>[]
}&{[K: string&{}]: (event?: object)=>any};

/**
 * `Pos` instance of a current board
 * 
 * **2048 Website**
 */
declare var board: Pos & {
    /**
     * Forces a user to leave a game to the menu
     */
    quit(): void;
};
/**
 * Requests a full access to DOM, window, globalThis and more
 * 
 * When called, asks a user  
 * 
 * If access turns on, restarts your addon.
 * 
 * When addon restarted and access is allowed,  
 * returns true
 * 
 * **2048 Website**
 */
declare function getAllAccess(reason?: string): boolean;

/**
 * Displays a message for a user
 * 
 * - When `message` is empty, hiddes the message
 * 
 * - `type` argument can be: `error`, `log`, or `warn`.  
 * By default, it is `log`
 * 
 * **2048 Website**
 */
declare function displayMessage(message?:string,type?:'error'|'log'|'warn'): void;

/**
 * Searches addon with `addonId`
 * 
 * If there is no addon found, stops your addon and  
 * says to the user about that addon to download
 * 
 * **2048 Website**
 */
declare function depend(addonId: string,notStrict?: false): false|never;
/**
 * Searches addon with `addonId`
 * 
 * Doesn't throws an error and doesn't stops you app if there  
 * is no addon, only returns `false` then
 * 
 * **2048 Website**
 */
declare function depend(addonId: string,notStrict: true): boolean;

/**
 * Recommend the addon
 * 
 * If `info` is ommited, tells `Recommendation: download <addonId>`
 * 
 * If `urlToAddon` is set, tells `Recommendation: download <addonId>, url: <urlToAddon>. <info>`
 * 
 * **2048 Website**
 */
declare function recommend(addonId: string,info?: string,urlToAddon?: string): void;

/**
 * Registers an event
 * 
 * **2048 Website**
 */
declare function registerEvent(event: string): void;
/**
 * Emits an event
 * 
 * **2048 Website**
 */
declare function emitEvent<Ev extends keyof typeof registered>(event: Ev, params?: RegisterType[Ev]['values']): any[];

/**
 * Returns all addons currently activated by user
 * 
 * **2048 Website**
 */
declare function getAddons(): readonly {
    name: string,
    id: string,
    author: string
}[];