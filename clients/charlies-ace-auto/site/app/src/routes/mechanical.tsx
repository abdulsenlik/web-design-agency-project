import { createFileRoute } from "@tanstack/react-router";

import { pageHead } from "@/site/seo";
import { ServicePage } from "@/site/service-page";

export const Route = createFileRoute("/mechanical")({
  head: () =>
    pageHead({
      title: "Auto Repair & Mechanical Service in Arlington Heights, IL | Charlie's Ace Auto & Body",
      description:
        "Brakes, diagnostics, warning lights, clutch, electrical and routine maintenance at Charlie's Ace Auto & Body in Arlington Heights. Call (847) 228-6603.",
      path: "/mechanical",
    }),
  component: MechanicalPage,
});

function MechanicalPage() {
  return (
    <ServicePage
      service="mechanical"
      title="Mechanical repair."
      intro="Warning lights, brakes, noises and routine maintenance for everyday cars."
      image={{
        src: "/assets/site/mechanical.jpg",
        width: 1792,
        height: 2240,
        alt: "A brake caliper and rotor on a car lifted in a shop, lit by a flashlight.",
      }}
      items={[
        {
          title: "Diagnostics and warning lights",
          text: "Check engine lights and problems you can feel but can't name.",
        },
        { title: "Brakes", text: "Squeals, grinding, a soft pedal, worn pads or rotors." },
        { title: "Clutch and drivetrain", text: "Slipping, grinding, or a clutch that quit on you." },
        {
          title: "Maintenance",
          text: "Oil changes and the regular service that keeps bigger repairs away.",
        },
        { title: "Electrical", text: "Batteries, starting trouble, windows and switches." },
        {
          title: "Second opinions",
          text: "Got a big quote somewhere else? Bring it in and we'll take a look.",
        },
      ]}
      steps={[
        { title: "Tell us the symptoms", text: "What you hear, feel or see, and when it happens." },
        { title: "We find the cause", text: "We check the car before recommending anything." },
        { title: "You decide", text: "You get a clear explanation and the cost first." },
      ]}
      faqs={[
        {
          q: "Will servicing my car here void my warranty?",
          a: "Under the federal Magnuson-Moss Warranty Act, a manufacturer generally can't void your warranty just because maintenance was done by an independent shop. Keep your receipts.",
        },
        {
          q: "What if my car isn't drivable?",
          a: "Call us first and tell us what's going on. We'll talk through how to get it here.",
        },
        {
          q: "Do you work on my make?",
          a: "Call with the year, make and model and we'll tell you right away whether it's a job for us.",
        },
        {
          q: "How do I get an estimate?",
          a: "Call or send a request with the year, make, model and what's happening. We'll get back to you to talk it through.",
        },
      ]}
    />
  );
}
