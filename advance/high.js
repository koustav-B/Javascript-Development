const companies=[
    {name:"c1",category:"SDE",start:1981,end:2003},
    {name:"c2",category:"MAD",start:1985,end:2004},
    {name:"c3",category:"AUTO",start:1988,end:2005},
    {name:"c4",category:"TECHNOLOGY",start:1990,end:2006},
    {name:"c5",category:"LEAD",start:1992,end:2007},
    {name:"c6",category:"HR",start:1995,end:2008},
    {name:"c7",category:"MANAGER",start:1997,end:2009},
    {name:"c8",category:"SENIOR",start:1987,end:2010},
    {name:"c9",category:"HR",start:1992,end:2011},
    {name:"c10",category:"INTERN",start:1993,end:2012}

];
const ages=[33,12,10,15,16,25,30,45,50,50,60,80]
console.log("Company Names:");
companies.forEach(company => console.log(company.name));

const adults = ages.filter(age => age >= 18);
console.log("Adults:", adults);

console.log("end years");
companies.forEach(company=> console.log(company.end));

const hrCompanies = companies.filter(hr => hr.category === "HR");
console.log("HR Companies:", hrCompanies);

const companyNames = companies.map(c => c.name);
console.log("All Company Names:", companyNames);

const companyDurations = companies.map(c => `${c.name}: ${c.end - c.start} years`);
console.log("Company Durations:", companyDurations);