function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }

  const tickets = [
    { id: 1001, title: "Login Issues - Can't Access Account", description: "Customer is unable to log in to their account. They've tried resetting their password multiple times but still cannot access.", customer: "John Smith", priority: "High", status: "Open", createdAt: "2024-01-15" },
    { id: 1002, title: "Payment Failed - Card Declined", description: "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.", customer: "Sarah Johnson", priority: "High", status: "Open", createdAt: "2024-01-16" },
    { id: 1003, title: "Unable to Download Invoice", description: "Customer cannot download their January invoice from the billing section. The download button is not working.", customer: "Michael Brown", priority: "Medium", status: "In-Progress", createdAt: "2024-01-17" },
    { id: 1004, title: "Incorrect Billing Address", description: "Customer’s billing address shows a different city even after updating it in profile settings.", customer: "Emily Davis", priority: "Low", status: "Open", createdAt: "2024-01-18" },
    { id: 1005, title: "App Crash on Launch", description: "Customer reports that the mobile app crashes immediately upon opening on Android 13.", customer: "David Wilson", priority: "High", status: "Open", createdAt: "2024-01-19" },
    { id: 1006, title: "Refund Not Processed", description: "Customer requested a refund two weeks ago but has not received the amount yet.", customer: "Sophia Taylor", priority: "Medium", status: "In-Progress", createdAt: "2024-01-20" },
    { id: 1007, title: "Two-Factor Authentication Issue", description: "Customer is not receiving 2FA codes on their registered phone number.", customer: "James Anderson", priority: "High", status: "Open", createdAt: "2024-01-21" },
    { id: 1008, title: "Unable to Update Profile Picture", description: "Customer tries to upload a new profile picture but gets 'Upload failed' error.", customer: "Olivia Martinez", priority: "Low", status: "Open", createdAt: "2024-01-22" },
    { id: 1009, title: "Subscription Auto-Renewal", description: "Customer wants to enable auto-renewal for their subscription but the toggle is disabled.", customer: "Liam Thomas", priority: "Medium", status: "In-Progress", createdAt: "2024-01-23" },
    { id: 1010, title: "Missing Order Confirmation Email", description: "Customer placed an order but didn’t receive a confirmation email even though payment succeeded.", customer: "Isabella Garcia", priority: "Medium", status: "Open", createdAt: "2024-01-24" }
  ];

  const ticketsGrid = document.getElementById("ticketsGrid");
  const taskStatusList = document.getElementById("taskStatusList");
  const resolvedList = document.getElementById("resolvedList");
  const inProgressEl = document.getElementById("inProgressCount");
  const resolvedEl = document.getElementById("resolvedCount");

  let inProgressCount = 0;
  let resolvedCount = 0;

  function renderTickets() {
    ticketsGrid.innerHTML = "";
    tickets.forEach(ticket => {
      const card = document.createElement("div");
      card.className = "ticket-card";
      card.innerHTML = `
        <h3>${ticket.title}</h3>
        <p>${ticket.description}</p>
        <p><b>Customer:</b> ${ticket.customer}</p>
        <p><b>Priority:</b> ${ticket.priority}</p>
        <p><b>Status:</b> ${ticket.status}</p>
        <p><b>Date:</b> ${ticket.createdAt}</p>
      `;
      card.onclick = () => addToTaskStatus(ticket);
      ticketsGrid.appendChild(card);
    });
  }

  function addToTaskStatus(ticket) {
    inProgressCount++;
    updateCounts();
    showToast(`Ticket #${ticket.id} added to Task Status`);

    const item = document.createElement("div");
    item.className = "task-item";
    item.innerHTML = `
      <span>${ticket.title}</span>
      <button onclick="completeTask(${ticket.id}, this)">Complete</button>
    `;
    taskStatusList.appendChild(item);
  }

  function completeTask(id, btn) {
    inProgressCount--;
    resolvedCount++;
    updateCounts();
    showToast(`Ticket #${id} marked as Resolved`);

    btn.parentElement.remove();
    const ticket = tickets.find(t => t.id === id);

    if (resolvedList.querySelector(".no-resolved-tasks-yet")) {
      resolvedList.innerHTML = "";
    }
    resolvedList.insertAdjacentHTML("beforeend", `<div class="resolved-entry">${ticket.title}</div>`);

    const index = tickets.findIndex(t => t.id === id);
    if (index > -1) tickets.splice(index, 1);
    renderTickets();
  }

  function updateCounts() {
    inProgressEl.innerText = inProgressCount;
    resolvedEl.innerText = resolvedCount;
  }

  renderTickets();