import resume from '../data/resume'

export const useGetResume = () => {
    let jobs = resume.experience
    return {
        jobs,
        resume
    }
}