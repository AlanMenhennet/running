import * as fs from "fs";
import { RunGroup } from "./model/RunGroup";
import { RunWeek } from "./model/RunWeek";
import { Run } from "./model/Run";

const fileContent = fs.readFileSync("chatgpt.json", 'utf8');

const json = JSON.parse(fileContent);
const groups : RunGroup[] = [];
Object.keys(json).forEach( groupKey =>{
    const group = new RunGroup();
    group.name = groupKey;

    const weeks = json[groupKey];
    Object.keys(weeks).forEach( weekKey => {
        const weekJson = json[groupKey][weekKey];
        const week = new RunWeek();
        
        const weekNumber = parseInt(weekKey.replace(/\D/g, ''));
        week.weekNumber = weekNumber;
        const runKeys = Object.keys(weekJson);
        runKeys.forEach( (runKey : any) => {
            const r = new Run();
            const distance = parseInt(weekJson[runKey])
            if(isNaN(distance)){
                r.description = weekJson[runKey];
            } else {
                r.distance = distance;
                let description = weekJson[runKey].substring(weekJson[runKey].indexOf(" ")).trim();
                description = description.substring(0, 1).toUpperCase() + description.substring(1);
                r.description = description;;
            }
            week.runs.push(r);
        });
        group.weeks.push(week);
    });
    groups.push(group);
})

fs.writeFileSync("public/parsed.json", JSON.stringify(groups, null, 4), 'utf8');

