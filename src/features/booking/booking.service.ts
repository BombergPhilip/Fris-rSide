import { bookingRequestSchema, type BookingRequestInput } from "./booking.schema";

export async function createBookingRequest(input: BookingRequestInput) {
  const booking = bookingRequestSchema.parse(input);

  // Repository and email adapters can be connected here without changing the UI contract.
  return {
    id: `request-${Date.now()}`,
    status: "RECEIVED" as const,
    booking,
  };
}
