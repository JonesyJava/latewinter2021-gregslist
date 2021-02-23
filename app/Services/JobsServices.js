import { ProxyState } from "../AppState.js";
import Job from "../Models/Jobs.js";
import { api } from "./AxiosService.js";

class JobsServices{

 
  constructor(){
    console.log("Jobs Service");
    this.getJobs()
  }

  async getJobs(){
    try {
      const res = await api.get('jobs')
      ProxyState.jobs = res.data.map(rawJobData => new Job(rawJobData))
      } catch (error) {
          console.log(error)
      }
  }
  async createJob(rawJob) {
    try {
        const res = await api.post('jobs', rawJob)
        ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
    } catch (error) {
        console.log(error)    
    }

  }

  async apply(id) {
    let temp = ProxyState.jobs
    let job = temp.find(j=> j.id === id)
    try {
        const res = await api.put('jobs/'+ id, job)
        ProxyState.jobs = ProxyState.jobs
    } catch (error) {
        console.log(error)
    }
  }

  async deleteJob(id) {
   try {
       const res = await api.delete('jobs/'+ id)
       this.getJobs()
   } catch (error) {
       console.log(error)
   }
  }
}

export const jobsServices = new JobsServices()