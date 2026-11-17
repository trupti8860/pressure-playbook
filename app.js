// PRESSURE PLAYBOOK — Dashboard interactions

document.addEventListener("DOMContentLoaded", () => {
  const views = document.querySelectorAll(".page-section");
  const navLinks = document.querySelectorAll(".nav-link");

  function showView(viewName) {
    views.forEach(view => view.classList.remove("active"));
    navLinks.forEach(link => link.classList.remove("active"));

    const target = document.getElementById(`${viewName}-view`);
    if (target) target.classList.add("active");

    const activeLink = document.querySelector(`[data-view="${viewName}"]`);
    if (activeLink) activeLink.classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => showView(link.dataset.view));
  });

  document.querySelectorAll("[data-go]").forEach(button => {
    button.addEventListener("click", () => showView(button.dataset.go));
  });

  const format = value =>
    value === null || value === undefined ? "—" : value.toLocaleString("en-IN");

  const formatDecimal = value =>
    value === null || value === undefined ? "—" : Number(value).toFixed(1);

  function statusBadge(eligible) {
    return eligible
      ? '<span class="status-badge status-eligible">RANKED</span>'
      : '<span class="status-badge status-provisional">PROVISIONAL</span>';
  }

  function renderBatters() {
    const search = document.getElementById("batter-search").value.toLowerCase();
    const filter = document.getElementById("batter-filter").value;

    const players = DASHBOARD_DATA.batters.filter(player => {
      const matchesSearch = player.name.toLowerCase().includes(search);
      const matchesFilter =
        filter === "all" ||
        (filter === "eligible" && player.eligible) ||
        (filter === "provisional" && !player.eligible);
      return matchesSearch && matchesFilter;
    });

    document.getElementById("batter-count").textContent =
      `${players.length} PLAYER${players.length === 1 ? "" : "S"}`;

    const table = document.getElementById("batter-table");

    if (!players.length) {
      table.innerHTML = '<tr><td colspan="7" class="empty-state">No matching players found.</td></tr>';
      return;
    }

    table.innerHTML = players.map(player => `
      <tr>
        <td>
          <div class="player-name">${player.name}</div>
          <div class="player-sub">${player.role}</div>
        </td>
        <td class="numeric">${formatDecimal(player.pressureSR)}</td>
        <td class="numeric">${format(player.pressureBalls)}</td>
        <td class="numeric">${format(player.pressureRuns)}</td>
        <td class="numeric">${player.uplift === null ? "—" : (player.uplift > 0 ? "+" : "") + formatDecimal(player.uplift)}</td>
        <td class="numeric rank">${player.rank ? "#" + String(player.rank).padStart(2, "0") + " / 87" : "—"}</td>
        <td>${statusBadge(player.eligible)}</td>
      </tr>
    `).join("");
  }

  function renderBowlers() {
    const search = document.getElementById("bowler-search").value.toLowerCase();
    const filter = document.getElementById("bowler-filter").value;

    const players = DASHBOARD_DATA.bowlers.filter(player => {
      const matchesSearch = player.name.toLowerCase().includes(search);
      const matchesFilter =
        filter === "all" ||
        (filter === "eligible" && player.eligible) ||
        (filter === "provisional" && !player.eligible);
      return matchesSearch && matchesFilter;
    });

    document.getElementById("bowler-count").textContent =
      `${players.length} PLAYER${players.length === 1 ? "" : "S"}`;

    const table = document.getElementById("bowler-table");

    if (!players.length) {
      table.innerHTML = '<tr><td colspan="7" class="empty-state">No matching players found.</td></tr>';
      return;
    }

    table.innerHTML = players.map(player => `
      <tr>
        <td>
          <div class="player-name">${player.name}</div>
          <div class="player-sub">${player.role}</div>
        </td>
        <td class="numeric">${formatDecimal(player.economy)}</td>
        <td class="numeric">${format(player.wickets)}</td>
        <td class="numeric">${format(player.pressureBalls)}</td>
        <td class="numeric">${formatDecimal(player.wicketRate)}</td>
        <td class="numeric rank">${player.rank ? "#" + String(player.rank).padStart(2, "0") + " / 81" : "—"}</td>
        <td>${statusBadge(player.eligible)}</td>
      </tr>
    `).join("");
  }

  function renderInsights() {
    const batterInsights = [
      {
        eyebrow: "HIGHEST PRESSURE STRIKE RATE",
        name: "Vaibhav Sooryavanshi",
        text: "254.7 pressure strike rate across 86 pressure balls. His pressure-ball sample meets the threshold, and he ranks 5th among eligible batters."
      },
      {
        eyebrow: "STRONGEST STRIKE-RATE UPLIFT",
        name: "Ravindra Jadeja",
        text: "A +38.2 strike-rate uplift from normal phase to pressure phase, based on the recorded IPL sample."
      }
    ];

    const bowlerInsights = [
      {
        eyebrow: "BEST ELIGIBLE COMPOSITE RANK",
        name: "Akash Madhwal",
        text: "Ranked 17th among 81 eligible bowlers, with a pressure economy of 10.07 and 7.89 wickets per 100 pressure legal balls."
      },
      {
        eyebrow: "LARGEST PRESSURE WICKET COUNT",
        name: "Tushar Deshpande",
        text: "Recorded 35 pressure wickets across 505 pressure legal balls in the analysed IPL sample."
      }
    ];

    document.getElementById("batter-insights").innerHTML = batterInsights.map(item => `
      <article class="detail-card">
        <div class="eyebrow">${item.eyebrow}</div>
        <h3>${item.name}</h3>
        <p>${item.text}</p>
      </article>
    `).join("");

    document.getElementById("bowler-insights").innerHTML = bowlerInsights.map(item => `
      <article class="detail-card">
        <div class="eyebrow">${item.eyebrow}</div>
        <h3>${item.name}</h3>
        <p>${item.text}</p>
      </article>
    `).join("");
  }

  document.getElementById("batter-search").addEventListener("input", renderBatters);
  document.getElementById("batter-filter").addEventListener("change", renderBatters);
  document.getElementById("bowler-search").addEventListener("input", renderBowlers);
  document.getElementById("bowler-filter").addEventListener("change", renderBowlers);

  renderBatters();
  renderBowlers();
  renderInsights();
});