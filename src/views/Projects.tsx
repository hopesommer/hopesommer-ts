import { useGetWindowSize } from '../hooks/useGetWindowSize';
import { 
    Badge,
    Card 
} from 'react-daisyui'

export const Projects = () => {
    const { isMobile } = useGetWindowSize();
    return (
        <div className={`py-8 resume ${isMobile ? 'px-6' : 'px-10'}`}>
            <div className="font-semibold mb-7 text-5xl">Projects</div>
            <a href='https://pokedex-snr.vercel.app/' className={`flex ${isMobile ? 'justify-center': ''}`}>
                <Card className={`bg-base-100 border-none shadow-xl relative ${isMobile ? 'w-60' : 'w-96'}`}>
                    <figure className="projectImage">
                        <img className="projectImage" src="/images/pokedex.png" alt="Pokedex"/>
                    </figure>
                    <Card.Body>
                        <h2 className="card-title flex">
                            Pokedex
                            <Badge className="badge-secondary white-text">NEW</Badge>
                        </h2>
                        <Card.Actions className="justify-end">
                            <Badge className="badge-outline">graphQL</Badge>
                            <Badge className="badge-outline">TypeScript</Badge>
                            <Badge className="badge-outline">React</Badge>
                        </Card.Actions>
                    </Card.Body>
                </Card>
            </a>
        </div>
    )
}