class Team {
    name: string;
    constructor(theName: string) { this.name = theName;}    
    players: Player[] = [];
    addPlayer(playerToAdd: Player) {
        this.players.push(playerToAdd);
    }
}
