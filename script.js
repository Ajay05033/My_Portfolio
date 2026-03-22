// Initialize Vanta.js 3D Network Background for an ultra-premium Cloud/DevOps feel
document.addEventListener("DOMContentLoaded", function () {
    if (typeof VANTA !== 'undefined') {
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x8b5cf6,        // Neon purple matching Glow-Folio theme
            backgroundColor: 0x020617, // Deep dark slate background
            points: 12.00,          // Density of nodes
            maxDistance: 20.00,     // Line distance
            spacing: 18.00,         // Spacing between dots
            showDots: true          // Show the connection nodes
        });
    }
});
