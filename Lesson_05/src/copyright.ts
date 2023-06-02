// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

//1st variation
//First, we explicitly assigned what was once infered by TS
/* let year: HTMLElement | null = document.getElementById("year") 
let thisYear: string = new Date().getFullYear().toString();
if(year){
  year.setAttribute("datetime", thisYear)
  year.textContent = thisYear
} */

//2nd variation
const year = document.getElementById("year") as HTMLSpanElement
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear)
year.textContent = thisYear