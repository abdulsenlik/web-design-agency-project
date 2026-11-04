import { createFileRoute } from "@tanstack/react-router";

import { BeforeAfter } from "@/site/before-after";
import { pageHead } from "@/site/seo";
import { ServicePage } from "@/site/service-page";

export const Route = createFileRoute("/body-collision")({
  head: () =>
    pageHead({
      title: "Auto Body & Collision Repair in Arlington Heights, IL | Charlie's Ace Auto & Body",
      description:
        "Collision repair, dent repair, paint and trim work at Charlie's Ace Auto & Body, 1429 E Algonquin Rd, Arlington Heights. Call (847) 228-6603.",
      path: "/body-collision",
    }),
  component: BodyCollisionPage,
});

function BodyCollisionPage() {
  return (
    <ServicePage
      service="body"
      title="Auto body & collision."
      intro="Dents, scrapes, collision damage and paint work, handled in our shop on Algonquin Road."
      image={{
        src: "/assets/site/body.jpg",
        width: 1792,
        height: 2240,
        alt: "A gloved hand sanding primer on a car fender in a body shop.",
      }}
      items={[
        {
          title: "Collision repair",
          text: "Repairs after an accident, from bumpers and fenders to door panels.",
        },
        { title: "Dent repair", text: "Dings and dents in doors, fenders and quarter panels." },
        {
          title: "Paint and refinishing",
          text: "Scratches, scrapes and repainting, matched to the rest of the car.",
        },
        {
          title: "Doors, windows and trim",
          text: "Broken handles, windows and the small parts that come with damage.",
        },
      ]}
      steps={[
        { title: "Call or send photos", text: "Tell us what happened. Photos help if you have them." },
        { title: "We look at it with you", text: "We check the damage and explain the repair." },
        { title: "You decide", text: "Nothing starts until you say go." },
      ]}
      extra={
        <>
          <h2 className="svc-h2">A typical door repair</h2>
          <BeforeAfter
            before="/assets/site/door-before.jpg"
            after="/assets/site/door-after.jpg"
            beforeAlt="A car door with a dent and scraped paint, before repair."
            afterAlt="The same car door after repair, smooth and repainted."
            width={2048}
            height={1360}
            caption="Illustration of a typical door repair. Not a customer vehicle."
          />
        </>
      }
      faqs={[
        {
          q: "Do I need an appointment for an estimate?",
          a: "Call first so we can make time to look at the car properly.",
        },
        {
          q: "Can I choose my own body shop after an accident?",
          a: "Generally, yes. Your insurer may recommend shops, but the choice is usually yours. Check your policy, and call us if you have questions.",
        },
        {
          q: "What should I bring?",
          a: "Your car, your insurance claim number if you have one, and any photos of the damage.",
        },
        {
          q: "Will I know the cost before you start?",
          a: "Yes. We look at the car first and explain the repair and the cost before any work begins.",
        },
      ]}
    />
  );
}
