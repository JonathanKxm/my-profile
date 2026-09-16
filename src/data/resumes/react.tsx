import type { StackEntry } from "../../types/resume"

const react: StackEntry = {
  stack: "react",
  label: "React Frontend Developer",
  title: "React Frontend Developer",
  summary: (
    <p>
      React Frontend Developer with extensive experience shipping
      production UIs. Strong focus on component architecture, performance,
      and accessibility. Deep experience with <strong>Next.js</strong>{" "}
      (SSR/SSG/ISR), modern state libraries, and design systems like{" "}
      <strong>Ant Design</strong> and <strong>Tailwind CSS</strong>.
    </p>
  ),
  experience: [
    {
      role: "Full Stack / React Engineer (Contractor)",
      period: "Jun 2023 - Present",
      scope: "Customer-facing apps + admin dashboards",
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Ant Design", "Zustand"],
      bullets: [
        {
          narrative: (
            <>
              A property-management client needed a user-friendly booking flow
              that worked equally well on a phone in a building lobby and on a
              desktop. I built the entire UI with <strong>React</strong> +{" "}
              <strong>Next.js</strong>, styled with <strong>Tailwind CSS</strong>{" "}
              and <strong>Ant Design</strong>, including a booking calendar,
              slot picker, and confirmation flow, using <strong>Zustand</strong>{" "}
              for client state and React Query for server state. End-to-end
              booking dropped from ~6 minutes (phone) to under 30 seconds, and
              the UI scored 95+ on Lighthouse across mobile and desktop.
            </>
          ),
        },
        {
          narrative: (
            <>
              An internal operations team was juggling two dashboards that
              disagreed about order state. I built a single realtime order
              tracking dashboard in <strong>React</strong> with WebSocket
              subscriptions for live updates, <strong>Ant Design</strong>{" "}
              tables, and lightweight <strong>Recharts</strong> visualizations
              for throughput KPIs. Status lookup latency dropped to sub-second,
              and "where is my order" tickets fell ~80%.
            </>
          ),
        },
      ],
    },
    {
      role: "Senior Software Engineer",
      period: "Wisedu Education Ltd. | 2014/6 - 2023/06",
      scope: "Campus commerce platform · admin + storefront UIs",
      stack: ["React", "Vue 2", "ElementUI", "Webpack", "Gulp"],
      bullets: [
        {
          narrative: (
            <>
              Wisedu's admin tools were a mix of legacy jQuery pages and
              inconsistent Vue 2 components, making every change risky. I
              introduced <strong>React</strong> for new admin modules, built a
              shared component library, set up <strong>Webpack</strong> build
              pipelines, and migrated the highest-traffic jQuery screens to
              React one at a time. Feature delivery time for new admin screens
              dropped roughly in half, and UI-related production bugs fell
              ~60%.
            </>
          ),
        },
      ],
    },
    {
      role: "Junior Software Engineer",
      period: "AsiaInfo Technology Ltd. | 2008/6 - 2014/6",
      scope: "Operator-facing telecom UIs",
      stack: ["JavaScript", "jQuery", "JSP"],
      bullets: [
        {
          narrative: (
            <>
              Telecom operators needed internal UIs for managing VAS campaigns.
              I built jQuery/AJAX-driven operator UIs on the JSP stack, with
              a focus on form-heavy workflows and server-side validation.
              Delivered four operator UIs on schedule; workflows that previously
              required two operators could now be handled by one.
            </>
          ),
        },
      ],
    },
  ],
  skills: (
    <>
      <p>Education: <strong>B.Sc.</strong> Computer Science, Jiangsu University of Science and Technology (<strong>2004 – 2008</strong>)</p>
      <ul>
        <li className="text-wrap">
          <strong>React:</strong> React 18, Hooks, Suspense, Concurrent features, Server Components
        </li>
        <li className="text-wrap">
          <strong>Frameworks:</strong> Next.js (App Router, SSR/SSG/ISR), Remix, React Router
        </li>
        <li className="text-wrap">
          <strong>State:</strong> Redux Toolkit, Zustand, Jotai, React Query / TanStack Query, SWR
        </li>
        <li className="text-wrap">
          <strong>UI:</strong> Ant Design, Material UI, Tailwind CSS, Radix UI, Framer Motion, Recharts
        </li>
      </ul>
    </>
  ),
  fileName: "Jonathan-React-Resume.pdf",
}

export default react
