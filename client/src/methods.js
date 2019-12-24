export default {
    matchTeamLogo(team) {
        switch (team) {
            case "Braves":
                return "bbclub-ATL ATL";
                break;
            case "Astros":
                return "bbclub-HOU";
                break;
            case "Red Sox":
                return "bbclub-BOS BOS";
                break;
            case "Indians":
                return "bbclub-CLE CLE";
                break;
            case "Brewers":
                return "bbclub-MIL MIL";
                break;
            case "Yankees":
                return "bbclub-NYY NYY";
                break;
            case "Rays":
                return "bbclub-TB TB";
                break;
            case "Orioles":
                return "bbclub-BAL BAL";
                break;
            case "Blue Jays":
                return "bbclub-TOR TOR";
                break;
            case "Tigers":
                return "bbclub-DET DET";
                break;
            case "Royals":
                return "bbclub-KC KC";
                break;
            case "Twins":
                return "bbclub-MIN MIN";
                break;
            case "White Sox":
                return "bbclub-CWS CWS";
                break;
            case "Athletics":
                return "bbclub-OAK OAK";
                break;
            case "Rangers":
                return "bbclub-TEX TEX";
                break;
            case "Angels":
                return "bbclub-LAA LAA";
                break;
            case "Mariners":
                return "bbclub-SEA SEA";
                break;
            case "Nationals":
                return "bbclub-WSH WSH";
                break;
            case "Phillies":
                return "bbclub-PHI PHI";
                break;
            case "Mets":
                return "bbclub-NYM NYM";
                break;
            case "Marlins":
                return "bbclub-MIA MIA";
                break;
            case "Pirates":
                return "bbclub-PIT PIT";
                break;
            case "Cardinals":
                return "bbclub-STL STL";
                break;
            case "Reds":
                return "bbclub-CIN CIN";
                break;
            case "Cubs":
                return "bbclub-CHC CHC";
                break;
            case "Dodgers":
                return "bbclub-LAD LAD";
                break;
            case "Diamondbacks":
                return "bbclub-ARI ARI";
                break;
            case "Rockies":
                return "bbclub-COL COL";
                break;
            case "Giants":
                return "bbclub-SF SF";
                break;
            case "Padres":
                return "bbclub-SD SD";
                break;
            default:
                return "bbclub-mlb";
        }
    }
}