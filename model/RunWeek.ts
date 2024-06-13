import { Run } from "./Run";

export class RunWeek {
    weekNumber = 0;
    runs : Run[] = [];

    fromJSON(json : any){
        this.weekNumber = json.weekNumber;
        this.runs = json.runs.map((run : any) => {
            const r = new Run();
            r.fromJSON(run);
            return r;
        })
    }

    getDistance() : number {
        return this.runs.reduce((acc, run) => acc + run.distance, 0);
    }

    getCompletedDistance() : number {
        return this.runs.reduce((acc, run) => run.completed ? acc + run.distance : acc, 0);
    }

    isCompleted() {
        return this.getDistance() == this.getCompletedDistance();
    }
}