// comp
import Header from "../Header";
import Footer from "../Footer";

// interface
interface BaseLayoutProps {
  children?: any;
}

export default function Layout({ children }: BaseLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  );
}
