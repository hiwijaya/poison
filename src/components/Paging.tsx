import Link from "next/link";


interface PagingProps {
  page: number
  totalPages: number
  basePath?: string
}

export default function Paging({
  page,
  totalPages,
  basePath = "/blog"
}: PagingProps) {

  const disabledPrev = page <= 1;
  const disabledNext = page >= totalPages;
  
  return(
    <nav className="flex-center">
      {
        disabledPrev ?
        <span aria-disabled={true} className="text-sm text-gray-500 px-4 cursor-not-allowed">Prev</span> :
        <Link href={`${basePath}?page=${page - 1}`} className="text-sm text-primary px-4">Prev</Link>
      }

      <span className="flex-center text-xs font-bold w-8 h-8 text-primary bg-[#242E28]">
        {page}
      </span>
      
      {
        disabledNext ?
        <span aria-disabled={true} className="text-sm text-gray-500 px-4 cursor-not-allowed">Next</span> :
        <Link href={`${basePath}?page=${page + 1}`} className="text-sm text-primary px-4">Next</Link>
      }
    </nav>
  );
}