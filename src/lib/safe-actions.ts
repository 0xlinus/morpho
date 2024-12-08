import { InvalidAddressError } from '@/errors/InvalidAddress';
import { NotFoundError } from '@/errors/NotFound';
import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";

export const baseActionClient = createSafeActionClient({
  defineMetadataSchema() {
    return z.object({
      actionName: z.string(),
    });
  },
  handleServerError(e, utils) {
    const { clientInput, bindArgsClientInputs, metadata, ctx } = utils;

    console.warn({ clientInput, bindArgsClientInputs, ctx, error: e }, `Server error during ${metadata.actionName} action`)

    if (e instanceof NotFoundError || e instanceof InvalidAddressError) {
      return e.message
    }

    return 'Oops! Something went wrong.'
  }
});
