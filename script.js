const protocols = ["TCP", "UDP", "ICMP"];
const fakeIPs = ["192.168.0.1", "10.0.0.5", "172.16.2.3", "8.8.8.8", "192.168.43.12"];

function generateFakePacket() {
  const src = fakeIPs[Math.floor(Math.random() * fakeIPs.length)];
  const dst = fakeIPs[Math.floor(Math.random() * fakeIPs.length)];
  const protocol = protocols[Math.floor(Math.random() * protocols.length)];
  const payload = Math.random().toString(36).substring(2, 15);

  const packet = document.createElement("div");
  packet.className = "packet";
  packet.innerHTML = `
    <strong>Source:</strong> ${src}<br>
    <strong>Destination:</strong> ${dst}<br>
    <strong>Protocol:</strong> ${protocol}<br>
    <strong>Payload:</strong> ${payload}
  `;

  const packetContainer = document.getElementById("packets");
  packetContainer.prepend(packet); // latest on top

  // Optional: limit total packets on screen
  if (packetContainer.children.length > 20) {
    packetContainer.removeChild(packetContainer.lastChild);
  }
}

// Generate new packet every 2 seconds
setInterval(generateFakePacket, 2000);
