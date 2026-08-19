# Plan: Integrated SIP Softphone & CRM with Auto-Dialer

Build a comprehensive web-based SIP softphone integrated with a bulk contact management CRM and an Auto-Dialer engine for Plama Projects' sales outreach.

## User Review Required

> [!IMPORTANT]
> - This implementation uses `sip.js` for WebRTC-based calling. You will need valid SIP credentials (WSS URL, Username, Password, Domain) to make real calls.
> - Data is stored in `localStorage` for this demo/standalone version. For a production environment with team features, we would migrate this to Lovable Cloud (Supabase).
> - The application will be accessible at the `/crm` route.

## Proposed Changes

### CRM & Infrastructure
- [ ] **Data Models**: Define TypeScript types for Contacts, Call Logs, SIP Settings, and Call Dispositions.
- [ ] **State Management**: Create a custom hook `useCRMStore` (using `localStorage` for persistence) to manage contacts, settings, and logs.
- [ ] **Contact Management**: 
    - Build a bulk CSV importer with column mapping.
    - Implement an Australian number normalizer (regex-based).
    - Create a searchable/filterable contact table.

### SIP Softphone
- [ ] **SIP Manager**: Build a singleton or context provider to handle `sip.js` registration, session management, and media streams.
- [ ] **Dialer UI**: Create an on-screen dialpad with call controls (mute, hold, DTMF).
- [ ] **Visuals**: Add an audio waveform visualizer for mic activity.

### Auto-Dialer Engine
- [ ] **Engine Logic**: Implement the sequential calling loop with configurable delays and control states (Pause, Skip, Stop).
- [ ] **UI Integration**: Create a "Dialer Mode" dashboard that shows current progress through a contact segment.

### Design & Integration
- [ ] **Dashboard Layout**: A clean, sidebar-based layout using the project's premium palette (Ink, Stone, Brass).
- [ ] **Navigation**: Add a "CRM Dashboard" link to the existing `SiteNav` (optionally restricted or just for internal use).
- [ ] **Post-Call Workflow**: Implement the call disposition pop-up and callback scheduler.

## Technical Details
- **Libraries**: `sip.js` (SIP/WebRTC), `lucide-react` (icons), `date-fns` (time), `framer-motion` (animations), `clsx/tailwind-merge` (styling).
- **Route**: New page at `src/routes/crm/index.tsx`.
- **Components**: Modularized under `src/components/crm/`.
- **Formatting**: Numbers are normalized to E.164 format (`+61...`).
