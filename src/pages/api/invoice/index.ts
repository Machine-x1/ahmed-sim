import fs from 'fs-extra';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { invoiceData } = req.body; // Retrieve invoiceData from the request body

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();

    console.log(invoiceData);
    // Add your custom design elements to the PDF

    // Add a background color or image
    page.drawRectangle({
      x: 0,
      y: 0,
      width: page.getWidth(),
      height: page.getHeight(),
      color: rgb(0.9, 0.9, 0.9), // Replace with your desired color or use an image
      // fillOpacity: 1,
    });

    // Add text elements
    page.drawText('SRC Invoice', {
      x: 40,
      y: page.getHeight() - 40,
      size: 24,
      font: await pdfDoc.embedFont(StandardFonts.Helvetica),
      color: rgb(0, 0, 0), // Replace with your desired color
    });

    // Add invoice details
    const startX = 40;
    let currentY = page.getHeight() - 100;
    const lineHeight = 20;

    page.drawText(`Invoice Number: ${invoiceData.invoiceNumber}`, {
      x: startX,
      y: currentY,
      size: 12,
      font: await pdfDoc.embedFont(StandardFonts.Helvetica),
      color: rgb(0, 0, 0),
    });

    currentY -= lineHeight;
    page.drawText(`Date: ${invoiceData.date}`, {
      x: startX,
      y: currentY,
      size: 12,
      font: await pdfDoc.embedFont(StandardFonts.Helvetica),
      color: rgb(0, 0, 0),
    });

    // Add customer information
    currentY -= lineHeight * 2;
    page.drawText(`Customer Name: ${invoiceData.customer.name}`, {
      x: startX,
      y: currentY,
      size: 12,
      font: await pdfDoc.embedFont(StandardFonts.Helvetica),
      color: rgb(0, 0, 0),
    });

    currentY -= lineHeight;
    page.drawText(`Customer Email: ${invoiceData.customer.email}`, {
      x: startX,
      y: currentY,
      size: 12,
      font: await pdfDoc.embedFont(StandardFonts.Helvetica),
      color: rgb(0, 0, 0),
    });

    currentY -= lineHeight;
    page.drawText(`Customer Address: ${invoiceData.customer.address}`, {
      x: startX,
      y: currentY,
      size: 12,
      font: await pdfDoc.embedFont(StandardFonts.Helvetica),
      color: rgb(0, 0, 0),
    });

    // Add items
    currentY -= lineHeight * 2;
    page.drawText('Items:', {
      x: startX,
      y: currentY,
      size: 14,
      font: await pdfDoc.embedFont(StandardFonts.Helvetica),
      color: rgb(0, 0, 0),
    });

    currentY -= lineHeight;
    invoiceData.items.forEach(async (item: any) => {
      page.drawText(`${item.name}: ${item.price}`, {
        x: startX,
        y: currentY,
        size: 12,
        font: await pdfDoc.embedFont(StandardFonts.Helvetica),
        color: rgb(0, 0, 0),
      });
      currentY -= lineHeight;
    });

    currentY -= lineHeight * 2;
    page.drawText(`Total: ${invoiceData.total}`, {
      x: startX,
      y: currentY,
      size: 14,
      font: await pdfDoc.embedFont(StandardFonts.Helvetica),
      color: rgb(0, 0, 0),
    });
    // Add more invoice details using invoiceData object

    const pdfBytes = await pdfDoc.save();

    const filePath = path.join(process.cwd(), 'public', 'invoice.pdf');
    await fs.writeFile(filePath, pdfBytes);

    return res.status(200).json({ fileName: 'invoice.pdf' });
  }
  return res.status(401).json({ message: 'notfound' });
}
