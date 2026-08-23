export type Project = {
  id: string
  missionCode: string
  title: string
  description: string
  stack: string[]
  highlights: string[]
  github?: string
  liveUrl?: string
  liveNote?: string
  starred?: boolean
}

export const projects: Project[] = [
  {
    id: 'nexus-copilot',
    missionCode: 'M-00',
    starred: true,
    title: 'Nexus Copilot — Agentic RAG on Databricks',
    description:
      'Comprehensive Agentic RAG application on Databricks: ingest software requirements, keep a synced Vector Search index, and equip LLMs with advanced tool-calling (SQL execution, web search, Managed MCP). Agents are mathematically graded with MLflow 3 and the full pipeline is scheduled via Lakeflow Jobs. Hosted as a serverless Databricks App (free edition — live only while compute is warm).',
    stack: [
      'Databricks',
      'Agentic RAG',
      'Vector Search',
      'MLflow 3',
      'Lakeflow Jobs',
      'MCP',
      'SQL Tools',
      'Web Search',
    ],
    highlights: [
      'Requirements ingestion → synced Vector Search',
      'Tool-calling: SQL, web search, Managed MCP',
      'Agent evaluation with MLflow 3',
      'Pipeline scheduling via Lakeflow Jobs',
      'Serverless Databricks App (may sleep when idle)',
    ],
    liveUrl: 'https://nexus-copilot-7474657914899240.aws.databricksapps.com',
    liveNote: 'Databricks serverless — may be offline when compute is cold',
  },
  {
    id: 'etl',
    missionCode: 'M-01',
    starred: true,
    title: 'ETL Migration Intelligence System',
    description:
      'A multi-agent AI system that automates the full lifecycle of legacy ETL pipeline migration — from reverse-engineering SQL/SSIS/Python code to generating production-ready PySpark pipelines on GCP. Built with LangChain Deep Agents and LangGraph orchestration, with 5 specialized sub-agents handling code analysis, documentation, architecture, and code generation.',
    stack: [
      'Python',
      'LangChain',
      'LangGraph',
      'Deep Agents',
      'PySpark',
      'GCP',
      'ChromaDB',
      'LangSmith',
    ],
    highlights: [
      'Multi-agent orchestration',
      'LangGraph stateful workflows',
      'AST parsing',
      'GCP Dataproc / BigQuery / Composer',
      'LangSmith observability',
      'Pydantic typed inter-agent state',
    ],
    github: 'https://github.com/druvan20/ETL-migration_Modernization',
  },
  {
    id: 'agent-factory',
    missionCode: 'M-02',
    title: 'AI Agent Factory — Document-to-Code Pipeline',
    description:
      'A backend system that converts BRD/PRD/TRD documents into working code through 3 autonomous agentic workflows: Requirements Gathering, Planning (RAG + web search + LLM), and Code Generation. Features Human-in-the-Loop via WebSockets, LangGraph checkpointing for resumability, and 5 agent design patterns (Plan-Execute, Reflection, Routing, Orchestrator-Worker, Evaluator-Optimizer).',
    stack: [
      'FastAPI',
      'LangChain',
      'LangGraph',
      'ChromaDB',
      'WebSockets',
      'SSE',
      'SQLite',
      'JWT',
      'OpenAI',
    ],
    highlights: [
      'HITL with WebSocket',
      'SSE progress streaming',
      'RAG over docs',
      'Agent design patterns',
      'Cost observability per run',
    ],
    github: 'https://github.com/druvan20/ai-agent-factory',
  },
  {
    id: 'foodiehub',
    missionCode: 'M-03',
    title: 'FoodieHub — Food Delivery Backend Platform',
    description:
      'A production-grade food delivery backend modeled on Swiggy/Zomato, built with .NET 8. Features 4 roles (Customer, Owner, Agent, Admin), 7-state order lifecycle, algorithmic agent scoring engine, order batching with geo-proximity, FIFO kitchen queue, custom FSQL query language, wallet with ACID guarantees, and concurrency-safe stock management.',
    stack: [
      '.NET 8',
      'C#',
      'JWT',
      'RBAC',
      'OWASP',
      'Entity Framework',
      'Swagger',
      'Background Services',
    ],
    highlights: [
      'Smart agent scoring algorithm',
      'Order batching engine',
      'FSQL filter language',
      'Concurrent wallet safety',
      'Background services',
    ],
    github: 'https://github.com/druvan20/FoodieHub_Backend_Dotnet',
  },
  {
    id: 'smartwatch-api',
    missionCode: 'M-04',
    title: 'Smartwatch Leaderboard System — REST API',
    description:
      'A secure, event-driven gaming leaderboard platform for smartwatch users built with Spring Boot 3. Features device capability–based challenge filtering (GPS, HRM, Accelerometer), geospatial challenge scoping, JWT auth with role-based access, and Kafka for event streaming.',
    stack: [
      'Java 17',
      'Spring Boot 3',
      'Spring Security',
      'JWT',
      'Kafka',
      'MySQL',
      'JPA/Hibernate',
      'Swagger',
    ],
    highlights: [
      'Device feature-tag matching',
      'Geo-scoped challenges',
      'Kafka event streaming',
      'Spring Security RBAC',
    ],
    github: 'https://github.com/druvan20/smartwatch-leaderboard',
  },
  {
    id: 'smartwatch-ui',
    missionCode: 'M-05',
    title: 'Smartwatch Leaderboard UI — Angular 20',
    description:
      'The Angular 20 frontend for the Smartwatch Leaderboard Platform, built with reactive state management via NgRx and RxJS. Complements the Spring Boot backend with a complete UI for challenge discovery, device management, and leaderboard views.',
    stack: ['Angular 20', 'RxJS', 'NgRx', 'TypeScript'],
    highlights: [
      'Angular 20',
      'NgRx state management',
      'RxJS reactive patterns',
      'Paired with Spring Boot backend',
    ],
    github: 'https://github.com/druvan20/Smartwatch_leaderboard_Frontend',
  },
  {
    id: 'job-portal',
    missionCode: 'M-06',
    title: 'Job Portal — Full-Stack Hiring Platform',
    description:
      'Full-stack job portal with search, filtering, application tracking, secure authentication, and role-based access. Built in a team of 8; backend APIs tuned for ~40% faster responses and validated with 30+ users.',
    stack: ['Java', 'JDBC', 'MySQL', 'React'],
    highlights: [
      'Team of 8 · end-to-end hiring flows',
      'Job search, filters, and application tracking',
      'Secure auth + role-based access',
      '~40% faster API responses · 30+ user tests',
    ],
    github: 'https://github.com/druvan20/react-job-portal-main',
  },
  {
    id: 'cardio',
    missionCode: 'M-07',
    title: 'Early Cardio Disease Detection',
    description:
      'Machine learning pipeline that analyzes patient data to flag early heart-disease risk signals and support timely medical follow-up.',
    stack: ['Python', 'Machine Learning', 'scikit-learn', 'pandas', 'NumPy'],
    highlights: [
      'Patient-data risk prediction',
      'Early-intervention focused ML workflow',
      'Classic ML stack for tabular clinical signals',
    ],
    github: 'https://github.com/druvan20/Early_cardio_disease_detection',
  },
]
