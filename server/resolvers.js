const { jobs, companies } = require("./db")

module.exports = {
    Query:{
        jobs:()=>{
                return jobs.list()
        },
        job:(_,{id})=>{
            return jobs.get(id) 
        },
        company:(_,{id})=>{
            return companies.get(id)
        }
    },
    Job:{
        company:(job)=>{
            return companies.get(job.companyId)
        }
    },
    Mutation:{
        createJob:(_,{input})=>{
            const id= jobs.create({...input,companyId:'HJRa-DOuG'})
            return jobs.get(id)
        }
    }


}