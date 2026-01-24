import { useState } from "react";
import "./TypesOfRoles.css";

const roles = [
  {
    id: "deltas",
    index: "01",
    title: "Deltas",
    short: "Deltas decide.",
    content:
      "Deltas are responsible for setting direction and making the hard decisions. They align strategy with execution and ensure teams are moving toward meaningful outcomes."
  },
  {
    id: "echos",
    index: "02",
    title: "Echos",
    short: "Echos win.",
    content:
      "Your mission is to own the holistic actions we need to take to help our partners win; including identifying the true problem, decomposing workflows, aligning stakeholders, building technical or AI solutions, and moving institutions forward. Echos combine deep technical skill with steady leadership."
  },
  {
    id: "devs",
    index: "03",
    title: "Devs",
    short: "Devs build.",
    content:
      "Devs design, build, and scale the core software systems. They focus on performance, reliability, and elegant technical execution."
  }
];

export default function TypesOfRoles() {
  const [activeRole, setActiveRole] = useState(roles[1]); // Echos default

  return (
    <section className="roles-wrapper">
      {/* LEFT */}
      <div className="roles-left">
        <h2>Types of Roles</h2>

        <ul className="roles-list">
          {roles.map((role) => (
            <li
              key={role.id}
              className={activeRole.id === role.id ? "active" : ""}
              onClick={() => setActiveRole(role)}
            >
              <span className="role-index">{role.index}</span>
              <span className="role-name">{role.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="roles-right">
        <p className="roles-intro">
          Palantir is built around three unique roles: Echos, Deltas, and Devs.
          While each role is distinct, they are intentionally designed to
          overlap, enabling teams to pursue outcomes from complementary — and
          often contradictory perspectives.
        </p>

        <div className="role-content">
          <span className="role-meta">
            {activeRole.index} — {activeRole.title.toUpperCase()}
          </span>

          <h3>{activeRole.short}</h3>

          <p>{activeRole.content}</p>
        </div>
      </div>
    </section>
  );
}
