import React, { useState } from 'react'
import Home from './pages/Home.jsx'
import { useServerStats } from './hooks/useServerStats'
import { SITE_CONFIG } from './lib/constants'

function App() {
  const [copied, setCopied] = useState(false)
  const { mcPlayers, discordOnline } = useServerStats()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(SITE_CONFIG.serverIP)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Home
      serverIP={SITE_CONFIG.serverIP}
      serverName={SITE_CONFIG.serverName}
      mcPlayers={mcPlayers}
      discordOnline={discordOnline}
      discordInvite={SITE_CONFIG.discordInvite}
      modesMaxWidth={SITE_CONFIG.modesMaxWidth}
      copyToClipboard={copyToClipboard}
      copied={copied}
    />
  )
}

export default App

