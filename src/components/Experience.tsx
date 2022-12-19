import { useGetResume } from '../hooks/useGetResume';
import { useGetWindowSize } from '../hooks/useGetWindowSize';
import {
    Badge,
    Card,
    Collapse,
} from 'react-daisyui'

export const Experience = () => {
    const { jobs } = useGetResume();
    const { isMobile } = useGetWindowSize();
    return (
        <div>
            <div className="flex font-medium text-2xl section-header">Experience</div>
            {jobs.map((job, index) => {
                return (
                    <Card key={index} className="border-none white-text bg-neutral my-5">
                        <Card.Body className="p-5">
                            <h2 className="block card-title mb-1 text-left">{job.company}</h2>
                            <div className="badge badge-time badge-secondary block mb-1 -mt-1 text-xs white-text font-semibold">
                                {job.timeperiod}
                            </div>
                            <div className="mb-2">{job.description}</div>
                            <Collapse className="collapse-plus border border-base-300 bg-base-100 rounded-box">
                                <Collapse.Title className="text-xl font-medium text-rose-400 flex align-center">Read More</Collapse.Title>
                                <Collapse.Content className="px-7 text-rose-400">
                                    <ul className="list-disc">
                                        {job.responsibilities.map((responsibility, index) => {
                                            return (
                                                <li key={index}>{responsibility}</li>
                                            )
                                        })}
                                    </ul>
                                </Collapse.Content>
                            </Collapse>
                            <Card.Actions className="mt-4 justify-end">
                                {job.stack.map((item, index) => {
                                    return (
                                        <Badge key={index} className="badge-time badge-primary white-text">{item}</Badge>
                                    )
                                })}
                            </Card.Actions>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}