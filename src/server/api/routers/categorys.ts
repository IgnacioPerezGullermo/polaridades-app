import { z } from "zod";

import {
  createTRPCRouter, protectedProcedure, publicProcedure
} from "~/server/api/trpc";
import { createCategoryInput, updateCategoryInput } from "~/types";

export const categoryRouter = createTRPCRouter({

  all: publicProcedure
  .query(async ({ctx}) => {
    const categorias = await ctx.prisma.categorias.findMany()
    return categorias;
}),

getCategoria: publicProcedure
  .input(z.string())
  .query(async ({ctx, input})=>{
    const categorias = await ctx.prisma.categorias.findUnique({
      where:{
        id: input
      },
    })
    return categorias
  }),

create: publicProcedure
  .input(createCategoryInput)
  .mutation(async({ctx, input})=>{
    return ctx.prisma.categorias.create({
      data: input
  })
}),

update: publicProcedure
.input(updateCategoryInput)
.mutation(async({ctx, input})=>{
  const {id, name, description, thumbnail} = input;
  return ctx.prisma.categorias.update({
    where:{
      id: id
    },
    data:{
      name: name,
      description: description,
      thumbnail: thumbnail,

    }
})
}),

delete: publicProcedure
  .input(z.string())
  .mutation(async({ctx, input})=>{
    return ctx.prisma.categorias.delete({
      where:{
        id: input,
      }
    })
  })
});
