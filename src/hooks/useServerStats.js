import { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../lib/constants';

export function useServerStats() {
  const [mcPlayers, setMcPlayers] = useState(0);
  const [discordOnline, setDiscordOnline] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const mcResponse = await fetch(`https://api.mcstatus.io/v2/status/java/${SITE_CONFIG.serverIP}`);
        const mcData = await mcResponse.json();
        setMcPlayers(mcData.online ? mcData.players.online : 0);
      } catch (err) {
        console.error("Error fetching Minecraft stats:", err);
      }

      try {
        const discordResponse = await fetch(`https://discord.com/api/v10/invites/${SITE_CONFIG.discordInviteCode}?with_counts=true`);
        const discordData = await discordResponse.json();
        if (discordData.approximate_presence_count !== undefined) {
          setDiscordOnline(discordData.approximate_presence_count);
        }
      } catch (err) {
        console.error("Error fetching Discord stats:", err);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 60000);
    return () => clearInterval(interval);
  }, []);

  return { mcPlayers, discordOnline };
}
