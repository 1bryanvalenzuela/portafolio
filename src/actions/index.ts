import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: import.meta.env.NODEMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: import.meta.env.NODEMAIL_USER,
      pass: import.meta.env.NODEMAIL_PASS,
    },
  });

export const server = {
  sendMessage: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(4).max(35),
      email: z.string().email().max(35),
      message: z.string().min(4).max(500),
    }),
    handler: async (input) => {
      const data: { [key: string]: string } = {};

      Object.entries(input).forEach(([key, value]) => {
        if (value !== undefined && value.trim() !== "") {
          data[key] = value;
        }
      });

      try {
        await transporter.sendMail({
            from: "bryanvalenzuela.dev <contacto@bryanvalenzuela.dev>",
            to: "1bryanvalenzuela@gmail.com",
            subject: `Nueva solicitud de ${data.name} - bryanvalenzuela.dev`,
            text: `Email: ${data.email}\nNombre: ${data.name}\nMensaje: ${data.message}`,
        })
  
        return { success: true, message: 'Solicitud enviada con éxito' };
      } catch (error) {
        console.log(error)
        return { success: false, message: error instanceof Error ? error.message : 'Hubo un error al enviar la solicitud, vuelve a intentar más tarde' };
      }
    },
  })
}