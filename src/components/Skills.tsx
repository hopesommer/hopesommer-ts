import { useGetResume } from '../hooks/useGetResume';
import { useGetWindowSize } from '../hooks/useGetWindowSize';
import {
    Kbd
} from 'react-daisyui';

export const Skills = () => {
    const { isMobile } = useGetWindowSize();
    const { resume } = useGetResume();
    return (
        <div>
            <div className="flex font-medium text-2xl section-header mb-5">Skills</div>
            {resume.skills.map((skill, index) => {
                return (
                    <Kbd key={index} className="kbd-xs m-1 p-2.5">
                        {skill.name}
                    </Kbd>
                )
            })}
        </div>
    )
}