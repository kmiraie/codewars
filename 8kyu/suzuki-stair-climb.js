// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. 
// He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

//My Solution

function stairsIn20(s){
    let sun = s[0].reduce((c,a)=> c+a,0)
    let mon = s[1].reduce((c,a)=> c+a,0)
    let tues = s[2].reduce((c,a)=> c+a,0)
    let wed = s[3].reduce((c,a)=> c+a,0)
    let thurs = s[4].reduce((c,a)=> c+a,0)
    let fri = s[5].reduce((c,a)=> c+a,0)
    let sat = s[6].reduce((c,a)=> c+a,0)
    
    return 20*(sun+mon+tues+wed+thurs+fri+sat)
  }