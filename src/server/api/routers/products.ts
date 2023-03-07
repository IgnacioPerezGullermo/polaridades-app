import { z } from "zod";

import {
  createTRPCRouter, protectedProcedure, publicProcedure
} from "~/server/api/trpc";
import { createProductoInput, updateProductoInput } from "~/types";

export const productosRouter = createTRPCRouter({

  all: publicProcedure
    .query(async ({ctx}) => {
      const productos = await ctx.prisma.producto.findMany()
      return productos;
  }),

  getProduct: publicProcedure
    .input(z.string())
    .query(async ({ctx, input})=>{
      const producto = await ctx.prisma.producto.findUnique({
        where:{
          id: input
        },
      })
      return producto
    }),

  create: publicProcedure
    .input(createProductoInput)
    .mutation(async({ctx, input})=>{
      return ctx.prisma.producto.create({
        data: input
    })
  }),

  update: publicProcedure
  .input(updateProductoInput)
  .mutation(async({ctx, input})=>{
    const {id, code, name, price, description, thumbnail, image, stock, categoriasId} = input;
    return ctx.prisma.producto.update({
      where:{
        id: id
      },
      data:{
        code: code,
        name: name,
        price: price,
        description: description,
        stock: stock,
        categoriasId: categoriasId,
        thumbnail: thumbnail,
        image: image,
      }
  })
}),

  delete: publicProcedure
    .input(z.string())
    .mutation(async({ctx, input})=>{
      return ctx.prisma.producto.delete({
        where:{
          id: input,
        }
      })
    })
});
