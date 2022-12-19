import { useGetResume } from '../hooks/useGetResume';
import {
    Card
} from 'react-daisyui'

export const Education = () => {
    const { resume } = useGetResume();
    return (
        <div>
            <div className="flex font-medium text-2xl section-header">Education</div>
            <Card className="border-none my-5 bg-primary white-text">
                <Card.Body className="p-5">
                    <Card.Title className="mb-1">{resume.education.school}</Card.Title>
                    <div className="badge badge-time badge-secondary block text-xs white-text font-semibold">
                        {resume.education.timeperiod}
                    </div>
                    <p>{resume.education.degree}</p>
                </Card.Body>
            </Card>
        </div>
    )
}