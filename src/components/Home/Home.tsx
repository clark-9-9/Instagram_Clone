import { Stories } from './Stories';
import { Posts } from './Posts';
import { Header } from './Header';


function Home() {


    return (            
        <section className='Home_Section'>
            <Header />

            <Stories />
            
            <Posts />
        </section>
    )
}




export { Home };