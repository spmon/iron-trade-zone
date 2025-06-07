
import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import { products } from '@/data/mockData';
import ProductCard from '@/components/ProductCard';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return products;
    
    const lowercaseQuery = query.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      (product.brand && product.brand.toLowerCase().includes(lowercaseQuery))
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <SearchIcon className="w-6 h-6 text-primary mr-2" />
            <h1 className="text-3xl font-bold">
              Kết quả tìm kiếm {query && `cho "${query}"`}
            </h1>
          </div>
          <p className="text-gray-600">
            Tìm thấy {filteredProducts.length} sản phẩm
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <SearchIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Không tìm thấy sản phẩm</h2>
            <p className="text-gray-600 mb-8">
              Thử tìm kiếm với từ khóa khác hoặc xem tất cả sản phẩm
            </p>
            <Link 
              to="/"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              Xem tất cả sản phẩm
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
