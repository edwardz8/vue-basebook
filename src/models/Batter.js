export class Batter {
    constructor({
        playerid,
        name,
        team
    } = {}) {
        this.playerid = playerid;
        this.name = name;
        this.team = team;
    }
}

export function addBatter(data) {
    return Object.freeze(new Batter(data));
}