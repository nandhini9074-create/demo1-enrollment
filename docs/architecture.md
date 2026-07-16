```markdown
## High-Level Architecture Diagram
```mermaid
flowchart LR
    subgraph dmz ["DMZ"]
        partner["Partner System(s)"]
        apiGw["API Gateway"]
    end

    subgraph trustedZone ["Trusted Zone"]
        integrationLayer["Integration Layer"]
        enrollmentSvc["EnrollmentService"]
    end

    subgraph restrictedZone ["Restricted / PCI Zone"]
        db[(PostgreSQL)]
        vault[("Vault<br/>AES-256 at rest")]
    end

    partner -- "HTTPS (mTLS)" --> apiGw
    apiGw -- "HTTPS (mTLS)" --> integrationLayer
    integrationLayer -- "HTTPS (mTLS)" --> enrollmentSvc
    enrollmentSvc -- "SQL" --> db
    enrollmentSvc -- "Field-level enc" --> vault
```

## Sequence Diagrams
### Enrollment / Onboarding
```mermaid
sequenceDiagram
    participant partner as Partner System
    participant apiGw as API Gateway
    participant integrationLayer as Integration Layer
    participant enrollmentSvc as EnrollmentService
    participant db as PostgreSQL
    participant vault as Vault

    partner->>apiGw: POST /file (Bearer Token)
    apiGw->>integrationLayer: Validate Token
    integrationLayer->>enrollmentSvc: processPan(fileDto)
    alt File Valid
        enrollmentSvc->>db: Insert File Metadata
        enrollmentSvc->>vault: Encrypt PAN
        enrollmentSvc-->>integrationLayer: Success Response
    else File Invalid
        enrollmentSvc-->>integrationLayer: Error Response
    end
    integrationLayer-->>apiGw: Response
    apiGw-->>partner: Response
```

## Data Flow Diagram (DFD)
```mermaid
flowchart TD
    subgraph dmz ["DMZ"]
        partner["Partner System(s)"]
        apiGw["API Gateway"]
    end

    subgraph trustedZone ["Trusted Zone"]
        integrationLayer["Integration Layer"]
        enrollmentSvc["EnrollmentService"]
    end

    subgraph restrictedZone ["Restricted / PCI Zone"]
        db[(PostgreSQL)]
        vault[("Vault<br/>AES-256 at rest")]
    end

    partner -- "[PII, PAN; TLS1.3]" --> apiGw
    apiGw -- "[PII, PAN; TLS1.3]" --> integrationLayer
    integrationLayer -- "[PII, PAN; TLS1.3]" --> enrollmentSvc
    enrollmentSvc -- "[PII, PAN; AES-256 at rest]" --> db
    enrollmentSvc -- "[PAN -> Token; Field-level enc]" --> vault
```