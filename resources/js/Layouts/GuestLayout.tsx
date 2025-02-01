import Footer from "@/Components/Footer";
import Header2 from "@/Components/Header2";
import Lines from "@/Components/Lines";
import ScrollToTop from "@/Components/ScrollToTop";
import ToasterContext from "@/context/ToastContext";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

type Props = {
    children: PropsWithChildren<any>;
    user?: { name: string };
};

export default function Guest({ children, user }: Props) {
    return (
        <div>
            <ThemeProvider
                enableSystem={true}
                attribute="class"
                defaultTheme="system"
            >
                <Lines />
                <Header2 user={user} />
                <ToasterContext />
                {children}
                <Footer />
                <ScrollToTop />
            </ThemeProvider>
        </div>
    );
}
