import { z } from 'zod';

export const createProductoInput = z.object(
    {
        code: z.number({
            required_error: 'Crea un codigo para el producto',
            invalid_type_error: 'El Codigo debe ser un numero',
        }), 
        name: z.string({
            required_error: 'El Producto necesita un nombre',
            invalid_type_error: 'El nombre del producto debe ser texto'
        }),
        price: z.number({
            required_error: 'El Producto debe tenes un precio',
            invalid_type_error: 'El precio debe ser un numero',
        })  ,
        categoriasId: z.string(),
        stock: z.number({
            invalid_type_error: 'El Codigo debe ser un numero',
        }),
        description: z.string(),
        thumbnail: z.string(),
        image: z.string(),

        // description:
    })

export const updateProductoInput = z.object(
    {   
        id: z.string().cuid(),
        code: z.number({

            invalid_type_error: 'El Codigo debe ser un numero',
        }), 
        name: z.string({
            invalid_type_error: 'El nombre del producto debe ser texto'
        }),
        price: z.number({
            invalid_type_error: 'El precio debe ser un numero',
        }),
        categoriasId: z.string(),
        stock: z.number({
            invalid_type_error: 'El Codigo debe ser un numero',
        }),
        description: z.string(),
        thumbnail: z.string(),
        image: z.string(),

        // description:
    })

export const createOpcionInput = z.object(
        {
            name: z.string({
                required_error: 'La opcion necesita un nombre',
                invalid_type_error: 'La opcion del producto debe ser texto'
            }),
            productoId: z.string(),
        })

export const updateOpcionInput = z.object(
        {
            id: z.string().cuid(),
            name: z.string({
                invalid_type_error: 'La opcion del producto debe ser texto'
            }),
            productoId: z.string(),
        })
        export const createCategoryInput = z.object(
            {
                name: z.string({
                    required_error: 'La categoria necesita un nombre',
                    invalid_type_error: 'El nombre de la categoria debe ser texto'
                }),
                description: z.string(),
                thumbnail: z.string(),
            })
    
    export const updateCategoryInput = z.object(
            {
                id: z.string().cuid(),
                name: z.string({
                    invalid_type_error: 'El nombre de la categoria debe ser texto'
                }),
                description: z.string(),
                thumbnail: z.string(),
            })
        export const createMesaInput = z.object(
            {
                name: z.string({
                    required_error: 'La mesa necesita un nombre',
                    invalid_type_error: 'El nombre de la mesa debe ser texto'
                }),
                clients: z.number({
                    required_error: 'Inserte una cantidad maxima de comensales'
                }),
                currentClients: z.number(),
            })
    
    export const updateMesaInput = z.object(
            {
                id: z.string().cuid(),
                name: z.string({
                    invalid_type_error: 'El nombre de la mesa debe ser texto'
                }),
                clients: z.number(),
                currentClients: z.number(),
                closed: z.boolean(),
            })

            export const createPedidoInput = z.object(
                {
                    amount: z.number(),
                    total: z.number(),
                    mesaId: z.string(),
                })
        
        export const updatePedidoInput = z.object(
                {
                    id: z.string().cuid(),
                    amount: z.number(),
                    total: z.number(),
                    mesaId: z.string(),
                })

                export const createDetallePedidoInput = z.object(
                    {
                        price: z.number(),
                        quantity: z.number(),
                        pedidoId: z.string(),
                        productoId: z.string(),
                    })
            
            export const updateDetallePedidoInput = z.object(
                    {
                        id: z.string().cuid(),
                        price: z.number(),
                        quantity: z.number(),
                        pedidoId: z.string(),
                        productoId: z.string(),
                    })