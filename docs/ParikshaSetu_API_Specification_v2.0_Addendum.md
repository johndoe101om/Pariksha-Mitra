# ParikshaSetu — API Specification Addendum v2.0
**National Free Competitive Exam Coaching Platform | Ministry of Education, Government of India**
*MeghRaj Sovereign Cloud REST API Suite*

---

## 1. Authentication & Common Headers
All requests must pass standard citizen session tokens or NIC Parichay SSO bearer tokens:
```http
Authorization: Bearer <JWT_NIC_MEGHRAJ_TOKEN>
X-Aadhaar-Hash: <SHA256_UIDAI_IDENTIFIER>
X-App-Version: 2.0.0
Content-Type: application/json
```

---

## 2. API Endpoints by Feature Domain

### A. AI Exam Success Predictor & Talent Telemetry
- `GET /api/v2/predictor/score`
  - **Query**: `?examId=ssc_cgl&userId={id}`
  - **Response**:
    ```json
    {
      "predictedScoreRange": [142, 158],
      "maxScore": 200,
      "confidenceLevel": "HIGH",
      "percentile": 92.4,
      "radarMetrics": { "quant": 72, "english": 88, "reasoning": 84, "gk": 65 },
      "improvementFactors": ["Mock consistency", "Speed in Quant"]
    }
    ```
- `GET /api/v2/ministry/talent-heatmap`
  - **Query**: `?metric=top_performers&stateId=all`
  - **Response**: District-level aggregate counts, proficiency distribution, and subject drop-offs.

### B. WhatsApp / Telegram Bot Engine
- `POST /api/v2/bot/enroll`
  - **Payload**: `{ "phone": "+919876543210", "channel": "whatsapp", "preferences": ["daily_mcq", "doubt_ocr"] }`
- `GET /api/v2/ministry/bot/telemetry`
  - **Response**: Message volumes, active users per channel, OCR latency distributions.

### C. School & Institutional Integration (NEP 2020)
- `POST /api/v2/school/udise/verify`
  - **Payload**: `{ "udiseCode": "09123456789" }`
  - **Response**: Verified school entity metadata, district, state, and authorized principal details.
- `POST /api/v2/school/classrooms/bulk-students`
  - **Payload**: Multipart CSV schema `[AadhaarHash, FullName, Grade, Stream, RollNumber]`.
  - **Response**: Processed student IDs and Academic Bank of Credits (ABC) link status.

### D. Bhashini Voice & Audio Processing
- `POST /api/v2/bhashini/asr` (Speech to Text)
  - **Payload**: Audio binary stream + target language code (e.g. `hi`, `ta`, `te`, `bn`).
- `POST /api/v2/bhashini/tts` (Text to Speech)
  - **Payload**: `{ "text": "...", "language": "hi", "voice": "female_meghraj" }`

### E. Current Affairs & Daily Compilations
- `GET /api/v2/current-affairs/daily`
  - **Query**: `?date=2026-08-22&category=all`
- `GET /api/v2/current-affairs/monthly-pdf`
  - **Query**: `?year=2026&month=08`

### F. AI Answer Writing Lab
- `POST /api/v2/eval/handwritten-answer`
  - **Payload**: Multipart image file of handwritten response + `questionId`.
  - **Response**:
    ```json
    {
      "score": 7.5,
      "maxScore": 10.0,
      "criteria": { "structure": 8.0, "content": 7.0, "language": 8.0, "relevance": 7.0 },
      "transcribedText": "...",
      "suggestions": ["Include more data on urbanization trends", "Strong conclusion"],
      "modelAnswerUrl": "/content/models/q_upsc_urban_2026.pdf"
    }
    ```

### G. Career Guidance & Aptitude
- `POST /api/v2/guidance/aptitude-evaluate`
  - **Payload**: Question responses array `[{ "qId": 1, "choice": "A" }, ...]`.
  - **Response**: Ranked compatible examinations, salary brackets, and progression flowcharts.

### H. Lok Sabha Constituency Telemetry
- `GET /api/v2/ministry/constituency/{pcCode}/report`
  - **Response**: Registered learners, daily active metrics, top schools, and generated infographic payload.

### I. Open Data Portal
- `GET /api/v2/open-data/datasets`
  - **Response**: Catalog of publicly downloadable datasets with automated Data.gov.in sync timestamps.
- `GET /api/v2/open-data/export/{datasetId}` (Formats: CSV, JSON, Parquet).
