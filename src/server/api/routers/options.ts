import { z } from "zod";

import {
  createTRPCRouter, protectedProcedure, publicProcedure
} from "~/server/api/trpc";
import { createOpcionInput, updateOpcionInput } from "~/types";

export const optionsRouter = createTRPCRouter({

  all: publicProcedure
    .query(async ({ctx}) => {
      const productos = await ctx.prisma.opcion.findMany()
      return productos;
  }),

  getProduct: publicProcedure
    .input(z.string())
    .query(async ({ctx, input})=>{
      const producto = await ctx.prisma.opcion.findUnique({
        where:{
          id: input
        },
      })
      return producto
    }),

  create: publicProcedure
    .input(createOpcionInput)
    .mutation(async({ctx, input})=>{
      return ctx.prisma.opcion.create({
        data: input
    })
  }),

  update: publicProcedure
  .input(updateOpcionInput)
  .mutation(async({ctx, input})=>{
    const {id, name, productoId} = input;
    return ctx.prisma.opcion.update({
      where:{
        id: id
      },
      data:{
        name: name,
        productoId: productoId,

      }
  })
}),

  delete: publicProcedure
    .input(z.string())
    .mutation(async({ctx, input})=>{
      return ctx.prisma.opcion.delete({
        where:{
          id: input,
        }
      })
    })
});
