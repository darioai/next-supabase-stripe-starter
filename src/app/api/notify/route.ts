// NUEVA / MODIFICADA: función POST para /api/notify

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY no está definida en el servidor");
  }


const FROM_ADDRESS = "suscripciones@datahora.es";
const ADMIN_ADDRESS = "dariofm@hotmail.com";

export async function POST(req: Request) {
  try {
    console.log(">>> /api/notify fue llamado");

    if (!process.env.RESEND_API_KEY) {
      console.error(">>> RESEND_API_KEY no está definida en el servidor");
      return NextResponse.json(
        { error: "Error de configuración del servidor (API key faltante)." },
        { status: 500 },
      );
    }

    const body = await req.json();

    const {
      name,
      email,
      businessType,
      clientsRange,
      message,
    }: {
      name?: string;
      email?: string;
      businessType?: string;
      clientsRange?: string;
      message?: string;
    } = body || {};

    if (!email || typeof email !== "string") {
      console.warn(">>> /api/notify sin email válido, body:", body);
      return NextResponse.json(
        { error: "Falta el email del usuario." },
        { status: 400 },
      );
    }

    const safeName =
      typeof name === "string" && name.trim().length > 0
        ? name.trim()
        : "Sin nombre";
    const safeBusinessType =
      typeof businessType === "string" && businessType.trim().length > 0
        ? businessType.trim()
        : "No indicado";
    const safeClientsRange =
      typeof clientsRange === "string" && clientsRange.trim().length > 0
        ? clientsRange.trim()
        : "No indicado";
    const safeMessage =
      typeof message === "string" && message.trim().length > 0
        ? message.trim()
        : "Sin mensaje adicional";

    console.log(">>> Datos recibidos en /api/notify:", {
      safeName,
      email,
      safeBusinessType,
      safeClientsRange,
    });

    // 1) Email para el administrador
    const adminResult = await resend.emails.send({
      from: `datahora suscripciones <${FROM_ADDRESS}>`,
      to: [ADMIN_ADDRESS],
      subject: "Nuevo registro en la lista de espera de datahora",
      text: [
        "Nuevo lead de acceso anticipado:",
        "",
        `Nombre: ${safeName}`,
        `Email: ${email}`,
        `Tipo de negocio: ${safeBusinessType}`,
        `Nº de clientes con campañas activas: ${safeClientsRange}`,
        "",
        "Mensaje:",
        safeMessage,
        "",
        `Fecha: ${new Date().toISOString()}`,
      ].join("\n"),
    });

    if (adminResult.error) {
      console.error(">>> Error enviando email al admin:", adminResult.error);
      return NextResponse.json(
        { error: "No se pudo enviar el email de notificación al administrador." },
        { status: 500 },
      );
    }

    console.log(">>> Email al admin enviado. Id:", adminResult.data?.id);

    // 2) Email de confirmación para el usuario
    const userResult = await resend.emails.send({
      from: `datahora suscripciones <${FROM_ADDRESS}>`,
      replyTo: "dariofm@hotmail.com",
      to: [email],
      subject: "Has entrado en la lista de espera de datahora 🎉",
      text: [
        `Hola ${safeName !== "Sin nombre" ? safeName : ""}`.trim() + ",",
        "",
        "Gracias por apuntarte a la lista de espera de acceso anticipado de datahora.",
        "",
        "Estamos terminando la primera versión de la herramienta para automatizar informes de marketing digital a partir de Google Analytics 4 y Meta Ads.",
        "A medida que vayamos activando cuentas de la beta privada, invitaremos a los usuarios por orden de registro.",
        "",
        "Si estás entre las primeras 50 cuentas que activen un plan de pago cuando lancemos, tendrás un 50 % de descuento durante los primeros 6 meses.",
        "",
        "Mientras tanto, puedes ver un ejemplo del informe aquí:",
        "https://www.datahora.es/demo-report",
        "",
        "Gracias por tu interés,",
        "El equipo de datahora",
      ].join("\n"),
    });

    if (userResult.error) {
      console.error(">>> Error enviando email al usuario:", userResult.error);
      return NextResponse.json(
        { error: "No se pudo enviar el email de confirmación al usuario." },
        { status: 500 },
      );
    }

    console.log(">>> Email al usuario enviado. Id:", userResult.data?.id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(">>> Error inesperado en /api/notify:", error);
    return NextResponse.json(
      { error: "Error interno al procesar la solicitud." },
      { status: 500 },
    );
  }
}
