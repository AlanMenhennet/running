import { RunWeek } from "./RunWeek";

export class RunGroup  {
    name = "";
    weeks : RunWeek[] = [];

    fromJSON(json : any){
        this.name = json.name;
        this.weeks = json.weeks.map((week : any) => {
            const w = new RunWeek();
            w.fromJSON(week);
            return w;
        })
    }

    getDistance() : number {
        return this.weeks.reduce((acc, week) => acc + week.getDistance(), 0);
    }

    getCompletedDistance() : number {
        return this.weeks.reduce((acc, week) => acc + week.getCompletedDistance(), 0);
    }
}
