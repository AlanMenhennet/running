export class Run {
    distance = 0
    description = ""
    time = 0;
    pace = 0;

    fromJSON(json : any){
        this.distance = json.distance;
        this.description = json.description;
        this.time = json.time;
        this.pace = json.pace;
    }
}