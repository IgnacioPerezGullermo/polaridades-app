import { z } from "zod";

import {
  createTRPCRouter, protectedProcedure, publicProcedure
} from "~/server/api/trpc";
import { createDetallePedidoInput, updateDetallePedidoInput } from "~/types";

export const detallesRouter = createTRPCRouter({

  all: publicProcedure
  .query(async ({ctx}) => {
    const detalles = await ctx.prisma.detallePedido.findMany()
    return detalles;
}),

getCategoria: publicProcedure
  .input(z.string())
  .query(async ({ctx, input})=>{
    const detalle = await ctx.prisma.detallePedido.findUnique({
      where:{
        id: input
      },
    })
    return detalle
  }),

create: publicProcedure
  .input(createDetallePedidoInput)
  .mutation(async({ctx, input})=>{
    return ctx.prisma.detallePedido.create({
      data: input
  })
}),

update: publicProcedure
.input(updateDetallePedidoInput)
.mutation(async({ctx, input})=>{
  const { id, price, quantity, pedidoId, productoId} = input;
  return ctx.prisma.detallePedido.update({
    where:{
      id: id
    },
    data:{
      price: price,
      quantity: quantity,
      pedidoId: pedidoId,
      productoId: productoId,
    }
})
}),

delete: publicProcedure
  .input(z.string())
  .mutation(async({ctx, input})=>{
    return ctx.prisma.detallePedido.delete({
      where:{
        id: input,
      }
    })
  })
});
