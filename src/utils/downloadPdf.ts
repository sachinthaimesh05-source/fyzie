/**
 * Utility to download the book PDF reliably across all environments (including sandboxed iframes)
 */
export async function downloadBookPdf(customFileName = 'Full_Stack_Web_Development_Book_FYZIE.pdf') {
  const pdfUrl = '/Full_Stack_Web_Development_Book_FYZIE.pdf';
  try {
    const response = await fetch(pdfUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch PDF: ${response.statusText}`);
    }
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = customFileName;
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    }, 1000);
  } catch (error) {
    console.error('Download via blob failed, falling back to direct navigation:', error);
    // Fallback: direct window download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = customFileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
    }, 500);
  }
}
