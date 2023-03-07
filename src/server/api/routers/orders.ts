import { z } from "zod";

import {
  createTRPCRouter, protectedProcedure, publicProcedure
} from "~/server/api/trpc";
import { createPedidoInput, updatePedidoInput } from "~/types";

export const ordersRouter = createTRPCRouter({

  all: publicProcedure
  .query(async ({ctx}) => {
    const pedidos = await ctx.prisma.pedido.findMany()
    return pedidos;
}),

getCategoria: publicProcedure
  .input(z.string())
  .query(async ({ctx, input})=>{
    const pedido = await ctx.prisma.pedido.findUnique({
      where:{
        id: input
      },
    })
    return pedido
  }),

create: publicProcedure
  .input(createPedidoInput)
  .mutation(async({ctx, input})=>{
    return ctx.prisma.pedido.create({
      data: input
  })
}),

update: publicProcedure
.input(updatePedidoInput)
.mutation(async({ctx, input})=>{
  const { id, amount, total, mesaId} = input;
  return ctx.prisma.pedido.update({
    where:{
      id: id
    },
    data:{
      amount: amount,
      total: total,
      mesaId: mesaId,
    }
})
}),

delete: publicProcedure
  .input(z.string())
  .mutation(async({ctx, input})=>{
    return ctx.prisma.pedido.delete({
      where:{
        id: input,
      }
    })
  })
});
