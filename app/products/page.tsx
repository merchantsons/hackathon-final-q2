import { ProductGrid } from '@/components/products/products-grid'
import { Suspense } from 'react'

export default function ProductsPage() {
  return (
    
      <Suspense fallback={<div>Loading...</div>}>
        <ProductGrid />
      </Suspense>
 
  )
}

