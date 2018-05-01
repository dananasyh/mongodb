var studs=[{
    CGPA:7,
    F_count: 0,
    E_count: 2,
},{
    CGPA: 5,
    F_count: 3,
    E_count: 1,
},
    {
        CGPA: 5,
        F_count: 3,
        E_count: 1,
    },];
for(var key in studs )
{
    console.log("CGPA:"+studs[key].CGPA +"F_count"+studs[key].F_count+"e_count"+studs[key].E_count);
}
