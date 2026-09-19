import { NextResponse } from "next/server";
import { createBookingRequest } from "@/features/booking/booking.service";
import { bookingRequestSchema } from "@/features/booking/booking.schema";

export async function POST(request: Request) {
  try {
    const input = await request.json();
    const parsed = bookingRequestSchema.safeParse(input);

    if (!parsed.success) {
      return NextResponse.json({ error: "Tjek venligst dine oplysninger." }, { status: 400 });
    }

    const result = await createBookingRequest(parsed.data);
    return NextResponse.json(result, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Der opstod en fejl. Prøv igen." }, { status: 500 });
  }
}
