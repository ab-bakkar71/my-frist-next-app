import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


const ContactPage = () => {
    return (
        <div>
            <h2 className={roboto.className}>This is contact page</h2>
        </div>
    );
};

export default ContactPage;