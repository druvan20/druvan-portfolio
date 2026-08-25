"""Generate ATS-friendly one-page resume PDF for Druvan G N."""
from fpdf import FPDF

PORTFOLIO = "https://druvan20.github.io/druvan-portfolio/"
LINKEDIN = "https://www.linkedin.com/in/druvan-gurukar/"
GITHUB = "https://github.com/druvan20"
LEETCODE = "https://leetcode.com/u/vvce22cseaiml0074/"
EMAIL = "druvangurukar20@gmail.com"
PHONE = "+91 63619 67951"

OUT = r"f:\p2\public\resume.pdf"
OUT_ROOT = r"f:\p2\Druvan_Gurukar_Resume.pdf"


class Resume(FPDF):
    def __init__(self):
        super().__init__(format="letter")
        self.set_auto_page_break(auto=False)
        self.set_margins(0.55 * 72, 0.45 * 72, 0.55 * 72)

    def section(self, title: str):
        self.ln(3)
        self.set_font("Helvetica", "B", 10)
        self.set_text_color(15, 25, 35)
        self.cell(0, 5, title.upper(), new_x="LMARGIN", new_y="NEXT")
        y = self.get_y()
        self.set_draw_color(15, 25, 35)
        self.set_line_width(0.4)
        self.line(self.l_margin, y, self.w - self.r_margin, y)
        self.ln(2)

    def labeled(self, label: str, text: str, size: float = 8.5):
        self.set_font("Helvetica", "B", size)
        self.set_text_color(30, 30, 30)
        self.write(4, f"{label} ")
        self.set_font("Helvetica", "", size)
        self.write(4, text)
        self.ln(4.2)

    def body(self, text: str, size: float = 9):
        self.set_font("Helvetica", "", size)
        self.set_text_color(30, 30, 30)
        self.multi_cell(0, 4.1, text)

    def bullet(self, text: str):
        self.set_font("Helvetica", "", 9)
        self.set_text_color(30, 30, 30)
        x = self.l_margin
        self.set_x(x)
        self.multi_cell(0, 4.0, f"- {text}")

    def role_line(self, left: str, right: str):
        self.set_font("Helvetica", "B", 9.5)
        self.set_text_color(15, 25, 35)
        w = self.w - self.l_margin - self.r_margin
        self.cell(w * 0.62, 4.5, left)
        self.set_font("Helvetica", "", 8.5)
        self.set_text_color(60, 60, 60)
        self.cell(w * 0.38, 4.5, right, align="R", new_x="LMARGIN", new_y="NEXT")

    def project_title(self, title: str, stack: str):
        self.set_font("Helvetica", "B", 9)
        self.set_text_color(15, 25, 35)
        self.cell(0, 4.3, title, new_x="LMARGIN", new_y="NEXT")
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(70, 70, 70)
        self.cell(0, 3.8, stack, new_x="LMARGIN", new_y="NEXT")


def build():
    pdf = Resume()
    pdf.add_page()
    usable = pdf.w - pdf.l_margin - pdf.r_margin

    # Header
    pdf.set_font("Helvetica", "B", 18)
    pdf.set_text_color(15, 25, 35)
    pdf.cell(0, 7, "DRUVAN G N", new_x="LMARGIN", new_y="NEXT", align="C")

    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(40, 40, 40)
    pdf.cell(
        0,
        5,
        "Trainee Engineer (SDE1) | Backend / Agentic Systems",
        new_x="LMARGIN",
        new_y="NEXT",
        align="C",
    )

    pdf.set_font("Helvetica", "", 8)
    pdf.set_text_color(40, 40, 40)
    pdf.cell(0, 4, "Mysuru, India  |  Bangalore (HashedIn)", new_x="LMARGIN", new_y="NEXT", align="C")

    # Contact row with real links
    pdf.set_font("Helvetica", "", 8)
    y = pdf.get_y() + 0.5
    links = [
        (EMAIL, f"mailto:{EMAIL}"),
        (PHONE, f"tel:{PHONE.replace(' ', '')}"),
        ("Portfolio", PORTFOLIO),
        ("LinkedIn", LINKEDIN),
        ("GitHub", GITHUB),
        ("LeetCode", LEETCODE),
    ]
    parts = []
    for label, url in links:
        parts.append((label, url))
    # Centered link row: measure and place
    gap = "  |  "
    full = gap.join(p[0] for p in parts)
    pdf.set_x(pdf.l_margin)
    # Draw as one line of clickable segments roughly centered
    total_w = pdf.get_string_width(full)
    x = pdf.l_margin + max(0, (usable - total_w) / 2)
    pdf.set_xy(x, y)
    for i, (label, url) in enumerate(parts):
        pdf.set_text_color(0, 70, 140)
        pdf.set_font("Helvetica", "U", 8)
        w = pdf.get_string_width(label)
        pdf.cell(w, 4, label, link=url)
        if i < len(parts) - 1:
            pdf.set_text_color(40, 40, 40)
            pdf.set_font("Helvetica", "", 8)
            gw = pdf.get_string_width(gap)
            pdf.cell(gw, 4, gap)
    pdf.ln(5)

    # Summary
    pdf.section("Summary")
    pdf.body(
        "Backend engineer focused on distributed, event-driven systems and API design under "
        "evolving business rules - building REST APIs and microservices in Java/Spring Boot and "
        "Python/FastAPI, and modeling long-running workflows as explicit, recoverable state machines "
        "(LangGraph checkpointing, human-in-the-loop review gates). Comfortable owning a system "
        "end-to-end: system design, authentication/authorization (JWT, OAuth, OWASP), data layers, "
        "and cloud deployment (GCP). Currently building production multi-agent platforms at "
        "Hashedin by Deloitte; drawn to problems in reliability, correctness, and scale."
    )

    # Skills
    pdf.section("Core Skills")
    pdf.labeled(
        "Backend & Systems:",
        "Java - Spring Boot - Python - FastAPI - .NET/C# - REST APIs - Microservices - "
        "System Design - Distributed Systems - Event-Driven Architecture (Kafka) - "
        "State Machines / Workflow Orchestration (LangGraph)",
    )
    pdf.labeled(
        "Reliability & Security:",
        "JWT / OAuth - OWASP - Idempotency & Retry Handling - Checkpointed Recoverable Workflows - "
        "Observability (LangSmith, MLflow)",
    )
    pdf.labeled(
        "Data & Infra:",
        "SQL - MySQL - PySpark - Databricks - ChromaDB - Vector Search - Docker - Git/GitHub - "
        "Jenkins - CI/CD - GCP",
    )
    pdf.labeled(
        "Applied AI:",
        "LangChain - LangGraph - RAG - Multi-Agent Systems - Deep Agents - Agentic RAG - MCP",
    )

    # Experience
    pdf.section("Experience")
    pdf.role_line(
        "Trainee Engineer (SDE1) - Hashedin by Deloitte",
        "April 2026 - Present | Bangalore, India",
    )
    pdf.ln(1)

    pdf.project_title(
        "Nexus Copilot - Agentic RAG on Databricks",
        "Databricks, Agentic RAG, Vector Search, MLflow 3, Lakeflow Jobs, MCP",
    )
    pdf.bullet(
        "Built an agentic RAG app that ingests software requirements into a synced Vector Search "
        "index and equips LLMs with tool-calling (SQL execution, web search, Managed MCP)."
    )
    pdf.bullet(
        "Graded agents with MLflow 3 and scheduled the pipeline via Lakeflow Jobs; hosted as a "
        "serverless Databricks App."
    )

    pdf.project_title(
        "ETL Migration Intelligence System",
        "Python, LangChain, LangGraph, Deep Agents, PySpark, GCP, ChromaDB, LangSmith",
    )
    pdf.bullet(
        "Core contributor on a multi-agent AI platform automating legacy ETL modernization for "
        "enterprise data pipelines on GCP - each stage runs as a discrete, observable agent step."
    )
    pdf.bullet(
        "Built the retrieval layer on PySpark and ChromaDB and instrumented the system end-to-end "
        "with LangSmith so every agent decision is traceable."
    )

    pdf.project_title(
        "AI Agent Factory - Document-to-Code Pipeline",
        "FastAPI, LangGraph, WebSockets, SSE, ChromaDB, SQLite",
    )
    pdf.bullet(
        "Designed a document-to-code pipeline covering three agentic workflows, each modeled as an "
        "explicit, recoverable state machine with LangGraph checkpointing."
    )
    pdf.bullet(
        "Built human-in-the-loop review (WebSockets, SSE) so long-running tasks can pause for review "
        "and resume reliably after failure or restart."
    )

    pdf.project_title("FoodieHub - Food Delivery Backend", ".NET 8, C#, JWT, OWASP, RBAC")
    pdf.bullet(
        "Independently designed and built a food-delivery backend end-to-end in .NET 8/C#, including "
        "JWT auth, RBAC, and OWASP-hardened APIs across changing order-state business rules."
    )

    pdf.project_title(
        "Smartwatch Leaderboard System",
        "Spring Boot, Java 17, Kafka, MySQL, JPA / Angular 20 + NgRx",
    )
    pdf.bullet(
        "Owned the backend for a real-time leaderboard service with Kafka event flow for device "
        "feature-tag matching and geo-scoped challenges; exposed a clean REST contract to an "
        "Angular 20 + NgRx client."
    )

    # Additional
    pdf.section("Additional Project")
    pdf.project_title("Job Portal - Full-Stack Web App", "Java, JDBC, MySQL, React")
    pdf.bullet(
        "Full-stack job portal (team of 8) with secure auth and role-based access; optimized backend "
        "REST APIs for ~40% faster response times, validated with 30+ test users."
    )

    # Education (no certs)
    pdf.section("Education")
    pdf.role_line(
        "B.E. CSE (AI & ML) - Vidyavardhaka College of Engineering, Mysore",
        "2022 - 2026 | CGPA: 9.5",
    )

    pdf.output(OUT)
    pdf.output(OUT_ROOT)
    print("wrote", OUT)
    print("wrote", OUT_ROOT)


if __name__ == "__main__":
    build()
