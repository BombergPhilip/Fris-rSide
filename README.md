# Atelier Nord

En modulær Next.js-prototype for en frisørsalon.

## Kom i gang

```bash
npm install
npm run dev
```

Bookingformularen sender en valideret bookingforespørgsel til `POST /api/bookings`. Den gemmer ikke data endnu og bekræfter ikke automatisk en tid. Næste naturlige trin er at udskifte service-laget med et repository, PostgreSQL/Drizzle og en email-adapter.
