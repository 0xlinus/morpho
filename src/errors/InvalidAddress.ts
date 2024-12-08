export class InvalidAddressError extends Error {
  constructor() {
    super('This is not a valid address.');
    this.name = 'InvalidAddressError';

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidAddressError);
    }
  }
}
