const getStoredapplication = ()=>{
    const storedJobapplication = localStorage.getItem("job-application");
    if(storedJobapplication){
        return JSON.parse(storedJobapplication)
    }
    return [];
}

const saveJobApplication = (id)=>{
    const storedJobapplication = getStoredapplication();
    const exist = storedJobapplication.find((exitid) => exitid === id);
    if(!exist){
        storedJobapplication.push(id);
        localStorage.setItem("job-application", JSON.stringify(storedJobapplication))
    }
}
export {saveJobApplication, getStoredapplication}