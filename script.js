if (localStorage.getItem("active_seconds") === null) {
    localStorage.setItem("active_seconds", "0");
}

function updateUptime() {
    const uptime_p = document.getElementById('uptime');
    if (!uptime_p) return;

    const now = Math.floor(Date.now() / 1000);
    const lastUpdate = parseInt(sessionStorage.getItem("last_tick"));
    let totalSeconds = parseInt(localStorage.getItem("active_seconds"));

    if (lastUpdate) {
        const delta = now - lastUpdate;

        if (delta > 0 && delta <= 2) {
            totalSeconds += delta;
            localStorage.setItem("active_seconds", totalSeconds.toString());
        }
    }

    sessionStorage.setItem("last_tick", now.toString());

    const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');

    uptime_p.textContent = `Uptime: ${h}:${m}:${s}`;
}

setInterval(updateUptime, 1000);
window.addEventListener('DOMContentLoaded', updateUptime);