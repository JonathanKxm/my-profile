import type { StackEntry } from "../../types/resume"

const vue: StackEntry = {
  stack: "vue",
  label: "Vue Frontend Developer",
  title: "Vue Frontend Developer",
  summary: (
    <p>
      Vue Frontend Developer with deep experience across{" "}
      <strong>Vue 2</strong>, <strong>Vue 3</strong>, and the wider Vue
      ecosystem (<strong>Pinia</strong>, <strong>Vue Router</strong>,{" "}
      <strong>Vite</strong>). Extensive experience building responsive,
      component-driven UIs with <strong>ElementUI</strong>,{" "}
      <strong>Ant Design Vue</strong>, and modern CSS frameworks. Strong
      eye for interaction polish and frontend performance.
    </p>
  ),
  experience: [
    {
      role: "Full Stack / Vue Engineer (Contractor)",
      period: "Jun 2023 - Present",
      scope: "Order dashboards + IoT admin portals",
      stack: ["Vue 3", "Composition API", "Pinia", "ElementUI", "Ant Design Vue", "Vite", "Tailwind CSS"],
      bullets: [
        {
          narrative: (
            <>
              Operations needed a single dashboard combining order tracking and
              IoT device status. I built the entire product from scratch using{" "}
              <strong>Vue 3</strong> with <strong>Composition API</strong> and{" "}
              <strong>Pinia</strong>, styled with <strong>ElementUI</strong> +{" "}
              <strong>Tailwind CSS</strong>, delivered via <strong>Vite</strong>,
              and connected to a Node.js backend over WebSocket for live data.
              The tool replaced two internal tools, shipped in ~6 weeks, and
              the operations team adopted it without any training.
            </>
          ),
        },
        {
          narrative: (
            <>
              A campus lab's smart cabinet hardware needed a management UI for
              chemical inventory, users, and audit logs. I built the portal in{" "}
              <strong>Vue 3</strong> + <strong>Ant Design Vue</strong>,
              including complex forms for chemicals, role-based views, and an
              audit-log explorer. The lab passed its compliance audit on first
              inspection, and monthly reconciliation effort dropped from 1
              day/week to ~10 minutes.
            </>
          ),
        },
      ],
    },
    {
      role: "Senior Software Engineer",
      period: "Wisedu Education Ltd. | 2014/6 - 2023/06",
      scope: "Campus commerce platform · storefront + admin",
      stack: ["Vue 2", "ElementUI", "Vue Router", "Vuex", "Webpack"],
      bullets: [
        {
          narrative: (
            <>
              Wisedu's campus commerce platform served 500+ universities from
              a single Vue 2 codebase, with growing feature pressure and
              performance concerns. I owned the <strong>Vue 2</strong> +{" "}
              <strong>ElementUI</strong> frontend architecture, built a shared
              component library, set up <strong>Webpack</strong> code-splitting,
              and shipped an automated SKU management UI used by every campus
              admin. First meaningful paint stayed under 2s on mid-range
              campus hardware, and SKU updates that previously took days
              happened in minutes.
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
          <strong>Vue:</strong> Vue 2, Vue 3, Composition API, &lt;script setup&gt;, SFC, reactivity model
        </li>
        <li className="text-wrap">
          <strong>State / Routing:</strong> Pinia, Vuex, Vue Router
        </li>
        <li className="text-wrap">
          <strong>UI:</strong> ElementUI, Element Plus, Ant Design Vue, Vuetify, Naive UI
        </li>
        <li className="text-wrap">
          <strong>CSS:</strong> Tailwind CSS, SCSS, CSS Modules, Flexbox, Grid
        </li>
      </ul>
    </>
  ),
  fileName: "Jonathan-Vue-Resume.pdf",
}

export default vue
