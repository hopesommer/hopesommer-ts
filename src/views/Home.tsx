import { useGetWindowSize } from '../hooks/useGetWindowSize';
import { 
    Button,
    Card,
} from 'react-daisyui';

export const Home = () => {
    const { isMobile } = useGetWindowSize();
    return (
        <div className={`home ${isMobile ? 'py-8' : 'py-10'}`}>
            <Card className="card bg-base-100 items-center pt-5 border-none">
                <div className="relative">
                    <img src="/images/sparkles-pink.gif" className="absolute top-6"/>
                    <img src="/images/IMG_2221.png" className="profile"/>
                </div>
                <Card.Body className="items-center text-center">
                    <Card.Title className="text-5xl">Hope Sommer</Card.Title>
                    <span className="text-xl">Fullstack Developer</span>
                    <Card.Actions className="mt-3">
                        <Button className="btn btn-primary white-text">
                            <a href="/files/hope_sommer.pdf" download>
                                Download CV
                            </a>
                        </Button>
                    </Card.Actions>
                </Card.Body>
            </Card>
        </div>
    )
}