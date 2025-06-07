
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Plus, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { products } from '@/data/mockData';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const ProductManagement = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [sellerProducts] = useState<Product[]>(
    products.filter(product => product.sellerId === user?.id || user?.role === 'seller')
  );

  if (!user || user.role !== 'seller') {
    navigate('/');
    return null;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button variant="ghost" onClick={() => navigate(-1)} className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại
            </Button>
            <div className="flex items-center">
              <Package className="w-6 h-6 text-primary mr-2" />
              <h1 className="text-3xl font-bold">Quản lý sản phẩm</h1>
            </div>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Thêm sản phẩm
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Danh sách sản phẩm</CardTitle>
          </CardHeader>
          <CardContent>
            {sellerProducts.length === 0 ? (
              <div className="text-center py-8">
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Chưa có sản phẩm nào</h3>
                <p className="text-gray-600 mb-4">Bắt đầu bằng cách thêm sản phẩm đầu tiên của bạn</p>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Thêm sản phẩm
                </Button>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Hình ảnh</TableHead>
                    <TableHead>Tên sản phẩm</TableHead>
                    <TableHead>Danh mục</TableHead>
                    <TableHead>Giá</TableHead>
                    <TableHead>Tồn kho</TableHead>
                    <TableHead>Đánh giá</TableHead>
                    <TableHead>Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sellerProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                      </TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{product.category}</Badge>
                      </TableCell>
                      <TableCell>{formatPrice(product.price)}</TableCell>
                      <TableCell>
                        <Badge variant={product.inStock ? "default" : "destructive"}>
                          {product.inStock ? 'Còn hàng' : 'Hết hàng'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <span className="text-yellow-400">★</span>
                          <span className="ml-1">{product.rating}</span>
                          <span className="text-gray-500 ml-1">({product.reviews})</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductManagement;
