// import { ProxyState } from "../AppState.js";
// import Job from "../Models/Jobs.js";

// class JobsServices{

 
//   constructor(){
//     console.log("Jobs Service");
//   }

//   createJob(rawJob) {
//     let temp = ProxyState.jobs
//     temp.push(new Job(rawJob))
//     ProxyState.jobs = temp

//   }

//   apply(id) {
//     let temp = ProxyState.jobs
//     let job = temp.find(j=> j.id === id)
//     ProxyState.jobs = temp
//   }

//   deleteJob(id) {
//     let temp = ProxyState.jobs
//     let jobsIndex = temp.findIndex(job =>  job.id == id)
//     temp.splice(jobsIndex, 1)
//     ProxyState.jobs = temp
//   }
// }

// export const jobsServices = new JobsServices()