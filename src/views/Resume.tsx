import { useGetWindowSize } from '../hooks/useGetWindowSize';
import { Education } from '../components/Education';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';

export const Resume = () => {
    const { isMobile } = useGetWindowSize();
    return (
        <div className={`py-8 resume ${isMobile ? 'px-6' : 'px-10'}`}>
            <div className="font-semibold mb-7 text-left text-5xl">Resume</div>
            {isMobile ? (
                <>
                    <Experience/>
                    <Education/>
                    <Skills/>
                </>
                ) : (
                <div className="gap-7 grid grid-cols-2">
                    <div>
                        <Experience/>
                    </div>
                    <div>
                        <Education/>
                        <Skills/>
                    </div>
                </div>
            )}
        </div>
    )
}