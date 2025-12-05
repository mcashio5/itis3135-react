import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router';
import './App.css';

export default function Layout() {
    return (
        <>
            
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            
        </>
    );
}
