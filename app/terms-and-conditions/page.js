import Breadcrumbs from '@/components/site/Breadcrumbs';

export const metadata = { title: 'Terms & Conditions', description: 'Terms and conditions for Jay Ganesh Films Entertainment Pvt. Ltd.' };

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />
      <h1 className="font-display text-5xl mt-6">Terms & <span className="text-gradient-gold">Conditions</span></h1>
      <div className="mt-8 prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
        <p>By enrolling with any of our studios, registering for our events or engaging our services, you agree to the following terms.</p>
        <h2 className="font-display text-2xl text-foreground mt-8">Enrolment & fees</h2>
        <p>Class fees are payable in advance. Refunds are provided on a case-by-case basis for medical or relocation reasons. Trial classes are subject to availability.</p>
        <h2 className="font-display text-2xl text-foreground mt-8">Conduct</h2>
        <p>We ask all students, parents and guests to uphold a respectful and inclusive environment. We reserve the right to refuse service for any breach.</p>
        <h2 className="font-display text-2xl text-foreground mt-8">Media & likeness</h2>
        <p>Photographs and videos captured during classes and events may be used for our promotional materials. Please inform us in writing if you wish to opt out.</p>
        <h2 className="font-display text-2xl text-foreground mt-8">Event registrations</h2>
        <p>Event passes are non-transferable unless approved by the organiser. Details are subject to change; official updates are posted on our Instagram pages.</p>
        <h2 className="font-display text-2xl text-foreground mt-8">Liability</h2>
        <p>Participants take part in classes and events at their own risk. Please inform your instructor of any medical conditions before joining a class.</p>
        <h2 className="font-display text-2xl text-foreground mt-8">Contact</h2>
        <p>For questions, email hello@jayganeshfilms.com.</p>
      </div>
    </div>
  );
}
