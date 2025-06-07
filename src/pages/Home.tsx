
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { products, categories } from '@/data/mockData';

const Home = () => {
  const featuredProducts = products.slice(0, 6);
  const newProducts = products.slice(2, 8);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            GymStore Vietnam
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Cửa hàng thể thao & dinh dưỡng uy tín hàng đầu cho gymer Việt Nam
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/products">
              Khám phá sản phẩm
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Danh mục sản phẩm</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group"
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {category.productCount} sản phẩm
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Sản phẩm nổi bật</h2>
            <Button variant="outline" asChild>
              <Link to="/products">
                Xem tất cả
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Sản phẩm mới</h2>
            <Button variant="outline" asChild>
              <Link to="/products">
                Xem tất cả
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Bắt đầu hành trình fitness của bạn ngay hôm nay
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Tham gia cộng đồng gymer Việt Nam và khám phá những sản phẩm chất lượng cao
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/register">Đăng ký ngay</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/products">Xem sản phẩm</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
