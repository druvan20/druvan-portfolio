import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { agents, type Agent } from '../data/site'

type AgentThemeContextValue = {
  agent: Agent
  setAgent: (agent: Agent) => void
}

const AgentThemeContext = createContext<AgentThemeContextValue | null>(null)

function applyTheme(agent: Agent) {
  const root = document.documentElement
  root.style.setProperty('--agent-accent', agent.accent)
  root.style.setProperty('--agent-glow', agent.glow)
  root.style.setProperty('--accent', agent.accent)
  root.style.setProperty('--glow', `${agent.accent}59`)
  root.dataset.agent = agent.codename
}

export function AgentThemeProvider({ children }: { children: ReactNode }) {
  const [agent, setAgentState] = useState<Agent>(() => agents[0])

  const setAgent = useCallback((next: Agent) => {
    setAgentState(next)
  }, [])

  useEffect(() => {
    applyTheme(agent)
  }, [agent])

  const value = useMemo(() => ({ agent, setAgent }), [agent, setAgent])

  return <AgentThemeContext.Provider value={value}>{children}</AgentThemeContext.Provider>
}

export function useAgentTheme() {
  const ctx = useContext(AgentThemeContext)
  if (!ctx) throw new Error('useAgentTheme must be used within AgentThemeProvider')
  return ctx
}
