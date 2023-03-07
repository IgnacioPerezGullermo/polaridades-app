import { z } from "zod";

import {
  createTRPCRouter, publicProcedure
} from "~/server/api/trpc";
import { createMesaInput, updateMesaInput } from "~/types";

export const mesasRouter = createTRPCRouter({

  all: publicProcedure
  .query(async ({ctx}) => {
    const mesa = await ctx.prisma.mesa.findMany()
    return mesa;
}),

getCategoria: publicProcedure
  .input(z.string())
  .query(async ({ctx, input})=>{
    const mesa = await ctx.prisma.mesa.findUnique({
      where:{
        id: input
      },
    })
    return mesa
  }),

create: publicProcedure
  .input(createMesaInput)
  .mutation(async({ctx, input})=>{
    return ctx.prisma.mesa.create({
      data: input
  })
}),

update: publicProcedure
.input(updateMesaInput)
.mutation(async({ctx, input})=>{
  const { id, name, clients, closed } = input;
  return ctx.prisma.mesa.update({
    where:{
      id: id
    },
    data:{
      name: name,
      clients: clients,
      closed: closed,
    }
})
}),

delete: publicProcedure
  .input(z.string())
  .mutation(async({ctx, input})=>{
    return ctx.prisma.mesa.delete({
      where:{
        id: input,
      }
    })
  })
});
