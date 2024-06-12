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
}
