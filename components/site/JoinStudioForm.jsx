'use client';
import Image from 'next/image';
import { useState } from 'react';

const initialState = {
  name: '',
  address: '',
  age: '',
  bday: '',
  whatsapp: '',
  time: '',
  city: '',
  branch: 'Hinjewadi Phase 1',
  email: '',
  nearBranch: '',
  instagram: '',
  weekend: false,
  weekly: false,
  kids: false,
  adult: false,
  plan: 'per_month', // 'per_month' | '3_months'
};

// The WhatsApp number that will receive the message (Shubh Dance Company head office).
// Include country code (91 = India) — DO NOT include "+" or spaces.
const WHATSAPP_NUMBER = '919923951535';

export default function JoinStudioForm({
  studioName = 'My Style Dance Studio',
  branchLabel = 'Hinjewadi Phase 1',
}) {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const buildMessage = () => {
    const yesNo = (b) => (b ? 'Yes' : 'No');
    const perMonth = form.plan === 'per_month' ? '1600/-' : '-';
    const threeMonths = form.plan === '3_months' ? '4000/-' : '-';

    // Matches the exact template shared by the studio
    return (
`${studioName}
 (${branchLabel})
Fillup details and join Studio

Name :- ${form.name}
Add :- ${form.address}
Age :- ${form.age}
B day :- ${form.bday}
WhatsApp :- ${form.whatsapp}
Time :- ${form.time}
City :- ${form.city}
Branch 📍 :- ${form.branch}
Email :- ${form.email}
Near Branch :- ${form.nearBranch}
Instagram ID :- ${form.instagram}
Weekend :- ${yesNo(form.weekend)}
Weekly :- ${yesNo(form.weekly)}
Kids :- ${yesNo(form.kids)}
Adult :- ${yesNo(form.adult)}
Per months :- ${perMonth}
3 Months :- ${threeMonths}

Note :- Fee Not Refundable.

(Mon to Fri Classes)
Per months :- 1600/-
3 months :- 4000/-

Google & Phone Pay No 9923951535.
Pay Send Screenshot Same No.

Shubh Dance Company
Head Hinjewadi Office :- 9923951535`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.whatsapp) {
      alert('Please fill Name and WhatsApp number.');
      return;
    }
    setSubmitting(true);
    const text = encodeURIComponent(buildMessage());
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    // Opens WhatsApp Web on desktop and the WhatsApp app on mobile,
    // with the chat pre-filled. User just taps the send button.
    window.open(url, '_blank');
    setSubmitting(false);
  };

  const input =
    'w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-amber-400';

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto rounded-2xl bg-gradient-to-br from-black/80 to-neutral-900/80 border border-white/10 p-6 md:p-8 space-y-4 text-white"
    >
      <div className="text-center mb-2">
        <h3 className="text-2xl font-bold">{studioName}</h3>
        <p className="text-amber-400 text-sm">({branchLabel})</p>
        <p className="mt-1 text-white/60 text-sm">Fill up details and join Studio</p>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <input className={input} name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input className={input} name="whatsapp" placeholder="WhatsApp Number" value={form.whatsapp} onChange={handleChange} required />
        <input className={input} name="address" placeholder="Address" value={form.address} onChange={handleChange} />
        <input className={input} name="age" placeholder="Age" value={form.age} onChange={handleChange} />
        <input className={input} name="bday" type="date" placeholder="Birthday" value={form.bday} onChange={handleChange} />
        <input className={input} name="time" placeholder="Preferred Time (e.g. 7-8 PM)" value={form.time} onChange={handleChange} />
        <input className={input} name="city" placeholder="City" value={form.city} onChange={handleChange} />
        <input className={input} name="branch" placeholder="Branch" value={form.branch} onChange={handleChange} />
        <input className={input} name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input className={input} name="nearBranch" placeholder="Nearest Landmark / Near Branch" value={form.nearBranch} onChange={handleChange} />
        <input className={input} name="instagram" placeholder="Instagram ID" value={form.instagram} onChange={handleChange} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="weekend" checked={form.weekend} onChange={handleChange} /> Weekend
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="weekly" checked={form.weekly} onChange={handleChange} /> Weekly
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="kids" checked={form.kids} onChange={handleChange} /> Kids
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="adult" checked={form.adult} onChange={handleChange} /> Adult
        </label>
      </div>

      <div className="pt-2">
        <p className="text-sm text-white/70 mb-2">Fee Plan (Mon–Fri Classes)</p>
        <div className="flex flex-col md:flex-row gap-3">
          <label className={`flex-1 cursor-pointer rounded-lg border px-4 py-3 text-sm ${form.plan === 'per_month' ? 'border-amber-400 bg-amber-400/10' : 'border-white/10 bg-white/5'}`}>
            <input type="radio" name="plan" value="per_month" checked={form.plan === 'per_month'} onChange={handleChange} className="mr-2" />
            Per Month — ₹1600/-
          </label>
          <label className={`flex-1 cursor-pointer rounded-lg border px-4 py-3 text-sm ${form.plan === '3_months' ? 'border-amber-400 bg-amber-400/10' : 'border-white/10 bg-white/5'}`}>
            <input type="radio" name="plan" value="3_months" checked={form.plan === '3_months'} onChange={handleChange} className="mr-2" />
            3 Months — ₹4000/-
          </label>
        </div>
      </div>

      {/* Pay Directly — PhonePe QR */}
<div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 md:p-5">
  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
    <div className="shrink-0 rounded-lg bg-white p-2">
      <Image
        src="/images/phonepe-qr.png"
        alt="PhonePe QR - Choudhary Mukesh Lumbaram"
        width={160}
        height={160}
        className="h-40 w-40 object-contain"
      />
    </div>

    <div className="flex-1 text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start gap-2">
        <span className="inline-flex items-center justify-center rounded-md bg-[#5f259f] text-white text-xs font-bold px-2 py-1">
          पे
        </span>
        <p className="text-sm font-semibold text-white">PhonePe · Accepted Here</p>
      </div>
      <p className="mt-2 text-sm text-white/70">
        Scan & Pay using PhonePe / Google Pay / any UPI app.
      </p>
      <p className="mt-1 text-sm text-white">
        <span className="text-white/60">Payee:</span> Choudhary Mukesh Lumbaram
      </p>
      <p className="text-sm text-white">
        <span className="text-white/60">UPI Number:</span> 9923951535
      </p>
      <a
        href="upi://pay?pa=9923951535@upi&pn=Choudhary%20Mukesh%20Lumbaram&cu=INR"
        className="mt-3 inline-block rounded-lg bg-[#5f259f] hover:bg-[#4c1e80] text-white text-sm font-medium px-4 py-2 transition"
      >
        Pay via UPI App
      </a>
      <p className="mt-2 text-xs text-white/50">
        After paying, send the screenshot on WhatsApp to <span className="text-white">9923951535</span>.
      </p>
    </div>
  </div>
</div>

<p className="text-xs text-white/50 pt-1">
  Note :- Fee Not Refundable. (Payment via PhonePe QR / UPI 9923951535 — please share payment screenshot.)
</p>

<button
  type="submit"
  disabled={submitting}
  className="w-full mt-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-semibold py-3 transition disabled:opacity-60"
>
  {submitting ? 'Opening WhatsApp…' : 'Send on WhatsApp'}
</button>
    </form>
  );
}