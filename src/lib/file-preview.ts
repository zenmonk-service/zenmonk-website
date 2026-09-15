import { renderAsync } from 'docx-preview'
import mammoth from 'mammoth'
import { formatFileSize } from '@/lib/helper'

export const escapeHtml = (str: string): string => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export const previewFile = async (file: File) => {
  if (!file) return

  const fileName = file.name.toLowerCase()
  const isPdf = fileName.endsWith('.pdf') || file.type === 'application/pdf'

  if (isPdf) {
    const fileUrl = URL.createObjectURL(file)
    window.open(fileUrl, '_blank')
    return
  }

  // For Word DOC / DOCX or other document formats
  const newTab = window.open('', '_blank')
  const docBlobUrl = URL.createObjectURL(file)

  if (!newTab) {
    // If popup blocker intervened
    window.open(docBlobUrl, '_blank')
    return
  }

  const escapedFileName = escapeHtml(file.name)
  const formattedSize = formatFileSize(file.size)

  newTab.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${escapedFileName} - Document Preview</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: #525659;
          color: #1f2937;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background-color: #323639;
          color: #f1f3f4;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          gap: 16px;
        }
        .file-info {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }
        .file-icon {
          width: 32px;
          height: 32px;
          background-color: #2b579a;
          color: white;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
          flex-shrink: 0;
        }
        .file-name {
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .file-size {
          color: #9aa0a6;
          font-size: 12px;
          margin-left: 8px;
        }
        .actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 16px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          font-family: inherit;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
          text-decoration: none;
        }
        .btn-primary {
          background-color: #F69333;
          color: #ffffff;
        }
        .btn-primary:hover {
          background-color: #e07f20;
        }
        .btn-secondary {
          background-color: rgba(255, 255, 255, 0.12);
          color: #f1f3f4;
        }
        .btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.22);
        }
        .viewer-container {
          flex: 1;
          display: flex;
          justify-content: center;
          padding: 32px 16px 48px;
          overflow-y: auto;
        }
        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #f1f3f4;
          margin-top: 80px;
          gap: 16px;
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid rgba(255,255,255,0.2);
          border-top-color: #F69333;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .docx-wrapper {
          background: transparent !important;
          padding: 0 !important;
        }
        .docx-viewer {
          background: white;
          box-shadow: 0 4px 16px rgba(0,0,0,0.25);
          margin-bottom: 24px;
          border-radius: 2px;
        }
        .mammoth-preview {
          background: white;
          width: 100%;
          max-width: 820px;
          padding: 48px 56px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.25);
          border-radius: 4px;
          line-height: 1.6;
          color: #111827;
        }
        .mammoth-preview h1, .mammoth-preview h2, .mammoth-preview h3 {
          margin-top: 20px;
          margin-bottom: 10px;
        }
        .mammoth-preview p {
          margin-bottom: 12px;
        }
        .mammoth-preview table {
          border-collapse: collapse;
          width: 100%;
          margin: 16px 0;
        }
        .mammoth-preview th, .mammoth-preview td {
          border: 1px solid #d1d5db;
          padding: 8px 12px;
        }
        .fallback-card {
          background: white;
          max-width: 520px;
          padding: 36px 32px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
          text-align: center;
          margin-top: 40px;
        }
        .fallback-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .fallback-title {
          font-size: 18px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 8px;
        }
        .fallback-desc {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 24px;
          line-height: 1.5;
        }
        @media print {
          .header { display: none !important; }
          body { background: white !important; }
          .viewer-container { padding: 0 !important; }
          .docx-viewer { box-shadow: none !important; }
        }
      </style>
    </head>
    <body>
      <header class="header">
        <div class="file-info">
          <div class="file-icon">W</div>
          <div>
            <span class="file-name">${escapedFileName}</span>
            <span class="file-size">(${formattedSize})</span>
          </div>
        </div>
        <div class="actions">
          <button class="btn btn-secondary" onclick="window.print()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 14h12v8H6z"></path></svg>
            Print
          </button>
          <a class="btn btn-primary" href="${docBlobUrl}" download="${escapedFileName}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download
          </a>
        </div>
      </header>
      <main class="viewer-container">
        <div id="loading" class="loading-state">
          <div class="spinner"></div>
          <p>Rendering document preview...</p>
        </div>
        <div id="docx-container"></div>
      </main>
    </body>
    </html>
  `)
  newTab.document.close()

  try {
    const arrayBuffer = await file.arrayBuffer()
    const container = newTab.document.getElementById('docx-container')
    const loading = newTab.document.getElementById('loading')

    if (!container) return

    let rendered = false

    // First try docx-preview
    try {
      await renderAsync(arrayBuffer, container, newTab.document.head, {
        className: 'docx-viewer',
        inWrapper: true,
        ignoreWidth: false,
        ignoreHeight: false,
        ignoreFonts: false,
        breakPages: true,
        ignoreLastRenderedPageBreak: false,
        experimental: true,
        trimXmlDeclaration: true,
        useBase64URL: true,
      })
      rendered = true
    } catch (docxErr) {
      console.warn('docx-preview could not render file, trying mammoth fallback', docxErr)
    }

    // If docx-preview failed, try mammoth
    if (!rendered) {
      try {
        const result = await mammoth.convertToHtml({ arrayBuffer })
        if (result.value && result.value.trim().length > 0) {
          const previewDiv = newTab.document.createElement('div')
          previewDiv.className = 'mammoth-preview'
          previewDiv.innerHTML = result.value
          container.appendChild(previewDiv)
          rendered = true
        }
      } catch (mammothErr) {
        console.warn('mammoth could not convert file', mammothErr)
      }
    }

    if (loading) {
      loading.style.display = 'none'
    }

    // If neither could render (e.g. legacy binary .doc format), show fallback card
    if (!rendered) {
      const fallbackDiv = newTab.document.createElement('div')
      fallbackDiv.className = 'fallback-card'
      fallbackDiv.innerHTML = `
        <div class="fallback-icon">📄</div>
        <div class="fallback-title">${escapedFileName}</div>
        <p class="fallback-desc">
          Direct in-browser rendering is unavailable for this Word document format (legacy .doc or protected format).
          You can download the file to view it in Microsoft Word or your preferred office suite.
        </p>
        <a class="btn btn-primary" href="${docBlobUrl}" download="${escapedFileName}" style="display:inline-flex;">
          Download Document
        </a>
      `
      container.appendChild(fallbackDiv)
    }
  } catch (err) {
    console.error('Error rendering preview:', err)
    const container = newTab.document.getElementById('docx-container')
    const loading = newTab.document.getElementById('loading')
    if (loading) loading.style.display = 'none'
    if (container) {
      const fallbackDiv = newTab.document.createElement('div')
      fallbackDiv.className = 'fallback-card'
      fallbackDiv.innerHTML = `
        <div class="fallback-icon">📄</div>
        <div class="fallback-title">${escapedFileName}</div>
        <p class="fallback-desc">
          Unable to generate preview for this file. Please download to view.
        </p>
        <a class="btn btn-primary" href="${docBlobUrl}" download="${escapedFileName}" style="display:inline-flex;">
          Download Document
        </a>
      `
      container.appendChild(fallbackDiv)
    }
  }
}
