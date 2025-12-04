import Link from 'next/link'

const page = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      Click <Link href="/documents/3265" className='underline text-blue-700 mx-2'>here</Link> for the document ID
    </div>
  )
}

export default page