import BookForm from '@/components/admin/forms/BookForm'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const NewBooks = () => {
  return (
    <>
      <Button asChild className="back-btn">
        <Link href="/admin/books">
          Back to Books
        </Link>
      </Button>

      <section className="w-full max-w-2xl">
        <BookForm />
      </section>
    </>
  )
}

export default NewBooks
