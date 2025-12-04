import Editor from "./editor";

interface documentIdProps {
    params: Promise<{document: string}>
}

const DocumentIdPage = async ({params}: documentIdProps) => {
    const resolvedParams = await params;
    const documentId = resolvedParams.document;


  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Editor />
    </div>
  )
}

export default DocumentIdPage