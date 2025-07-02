import type { Metadata } from "next";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import { ChatbotSection } from "./components/chatbot";
import { AboutSection } from "./components/about";
import { ContactSection } from "./components/contact";
import { Footer } from "./components/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Medic AI",
  description: "AI for Medical Analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="watson-chat" strategy="afterInteractive">
          {`
          window.watsonAssistantChatOptions = {
    integrationID: "54fbd6da-6186-40dd-85ed-36c22e131971", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "9d0e2ec0-240e-4ac6-b32d-a92a128c893a", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render();setTimeout(() => instance.clearChat(), 10000); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
        `}
        </Script>
      </head>
      <body>
        <Navbar />
        <HeroSection></HeroSection>
        <ChatbotSection></ChatbotSection>
        <AboutSection></AboutSection>
        <ContactSection></ContactSection>
        <Footer></Footer>
      </body>
    </html>
  );
}
