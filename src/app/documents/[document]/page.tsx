interface documentIdProps {
    params: Promise<{document: string}>
}

const DocumentIdPage = async ({params}: documentIdProps) => {
    const resolvedParams = await params;
    const documentId = resolvedParams.document;


  return (
    <div>Document ID: {documentId}</div>
  )
}

export default DocumentIdPage