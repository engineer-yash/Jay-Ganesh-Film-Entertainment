import Breadcrumbs from '@/components/site/Breadcrumbs';

export const metadata = { title: 'Privacy Policy', description: 'Privacy policy for Jay Ganesh Films Entertainment Pvt. Ltd.' };

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
      <h1 className="font-display text-5xl mt-6">Privacy <span className="text-gradient-gold">Policy</span></h1>
      <div className="mt-8 prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
        <p>At Jay Ganesh Films Entertainment Pvt. Ltd., we respect your privacy. This policy explains how we collect, use and protect the information you share with us across our website, studios and events.</p>
        <h2 className="font-display text-2xl text-foreground mt-8">Information we collect</h2>
        <p>When you enrol, register for events or contact us, we may collect your name, phone number, email address, age category and city. Photographs and videos taken at classes or events may be used for promotional purposes.</p>
        <h2 className="font-display text-2xl text-foreground mt-8">How we use it</h2>
        <p>To respond to enquiries, share class schedules, event updates, offers and receipts. We never sell your data.</p>
        <h2 className="font-display text-2xl text-foreground mt-8">Your rights</h2>
        <p>You can request access, correction or deletion of your data at any time by emailing hello@jayganeshfilms.com.</p>
        <h2 className="font-display text-2xl text-foreground mt-8">Cookies</h2>
        <p>Our website uses minimal cookies for analytics and to remember your preferences. You can disable cookies in your browser.</p>
        <h2 className="font-display text-2xl text-foreground mt-8">Contact</h2>
        <p>Questions about this policy? Reach us at hello@jayganeshfilms.com.</p>
      </div>
    </div>
  );
}
