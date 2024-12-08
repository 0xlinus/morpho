import { NotFoundError } from '@/errors/NotFound';
import { createSafeActionClient, DEFAULT_SERVER_ERROR_MESSAGE } from "next-safe-action";
import { z } from "zod";

export const baseActionClient = createSafeActionClient({
  defineMetadataSchema() {
    return z.object({
      actionName: z.string(),
    });
  },
  handleServerError(e, utils) {
    const { clientInput, bindArgsClientInputs, metadata, ctx } = utils;

    console.error({ clientInput, bindArgsClientInputs, ctx, error: e }, `Server error during ${metadata.actionName} action`)

    if (e instanceof NotFoundError) {
      return e.message
    }

    return DEFAULT_SERVER_ERROR_MESSAGE;
  }
});
