import '@/styles/reset.css';
import '@/styles/global.css';
import '@/styles/variables.css';
import { mainFont } from '@/libs/font';
import {Footer} from '@/components/footer';

export const metadata = {
  title: 'AI Imaginer',
  name: 'viewport, description',
  description: 'The AI Imaginer is a very useful tool that simplifies your work to build an image for your project or willness.',
  content: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mainFont.className}>
      <body className="layout">
        {children}
        <Footer />
        <div className="overlay" />
      </body>
    </html>
  );
}
