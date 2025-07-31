// welcome here :3
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        console.clear();

        // Get basic user data (no permissions needed)
        const userAgent = navigator.userAgent;
        const browser = getBrowserName(userAgent);
        const os = getOS(userAgent);
        const device = getDeviceType(userAgent);
        const screen = `${window.screen.width}x${window.screen.height}`;
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Fun random "weather" (no API)
        const fakeWeather = {
            temp: Math.floor(Math.random() * 30) + 10, // 10-40°C
            mood: ["sunny", "rainy", "cloudy", "spooky", "cozy"][Math.floor(Math.random() * 5)]
        };

        // Console message
        console.log(`
            ᐡ⸝⸝ᴗ ·̮ ᴗ⸝⸝ ྀི ᐡ

            hey there, fellow dev,

            it’s currently ${time}, 
            your device is a ${device} 
            running ${os}, 
            using ${browser}. 
            Screen size: ${screen}.
            
            Thanks for stopping by! ✨
            https://instagram.com/madebyjujube
            
            ꒰ঌ(ᐢ ᵒ̴̶̷᷄ 𖥦 ᵒ̴̶̷᷅ ᐢ)໒꒱   ꒰✿ᐡ⸝ɞ̴̶̷ ·̮ ɞ̴̶̷⸝ᐡ꒱
        `);

        // Helper functions
        function getBrowserName(ua) {
            if (ua.includes("Firefox")) return "Firefox";
            if (ua.includes("Edg")) return "Edge";
            if (ua.includes("Chrome")) return "Chrome";
            if (ua.includes("Safari")) return "Safari";
            return "a mystery browser";
        }

        function getOS(ua) {
            if (ua.includes("Windows")) return "Windows";
            if (ua.includes("Mac")) return "macOS";
            if (ua.includes("Linux")) return "Linux";
            if (ua.includes("Android")) return "Android";
            if (ua.includes("iOS")) return "iOS";
            return "an unknown OS";
        }

        function getDeviceType(ua) {
            if (/tablet|ipad/i.test(ua)) return "tablet";
            if (/mobile|iphone|android/i.test(ua)) return "phone";
            return "desktop";
        }
    }, 1000);
});