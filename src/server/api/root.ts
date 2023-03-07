import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { categoryRouter } from "./routers/categorys";
import { detallesRouter } from "./routers/detalles";
import { mesasRouter } from "./routers/mesas";
import { optionsRouter } from "./routers/options";
import { ordersRouter } from "./routers/orders";
import { productosRouter } from "./routers/products";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  productos: productosRouter,
  opciones: optionsRouter,
  categorias: categoryRouter,
  mesas: mesasRouter,
  pedidos: ordersRouter,
  detalles: detallesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
