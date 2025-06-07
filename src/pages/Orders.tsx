
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, ArrowLeft, Eye } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Order } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Orders = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    // Load orders from localStorage
    const loadedOrders: Order[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('order_')) {
        try {
          const orderData = JSON.parse(localStorage.getItem(key) || '');
          if (orderData.userId === user.id) {
            loadedOrders.push({
              ...orderData,
              createdAt: new Date(orderData.createdAt)
            });
          }
        } catch (error) {
          console.error('Error parsing order data:', error);
        }
      }
    }
    
    // Sort by newest first
    loadedOrders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    setOrders(loadedOrders);
  }, [user, navigate]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'shipping': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'Chờ xác nhận';
      case 'confirmed': return 'Đã xác nhận';
      case 'shipping': return 'Đang giao';
      case 'delivered': return 'Đã giao';
      case 'cancelled': return 'Đã hủy';
      default: return status;
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mr-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại
          </Button>
          <div className="flex items-center">
            <Package className="w-6 h-6 text-primary mr-2" />
            <h1 className="text-3xl font-bold">Đơn hàng của tôi</h1>
          </div>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-16">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Chưa có đơn hàng nào</h2>
            <p className="text-gray-600 mb-8">Bạn chưa có đơn hàng nào. Hãy mua sắm ngay!</p>
            <Button onClick={() => navigate('/')}>
              Tiếp tục mua sắm
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">
                        Đơn hàng #{order.id}
                      </CardTitle>
                      <p className="text-gray-600 mt-1">
                        {formatDate(order.createdAt)}
                      </p>
                    </div>
                    <Badge className={getStatusColor(order.status)}>
                      {getStatusText(order.status)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Sản phẩm:</h4>
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 py-2">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="font-medium">{item.product.name}</p>
                            <p className="text-sm text-gray-600">
                              Số lượng: {item.quantity}
                            </p>
                          </div>
                          <p className="font-semibold">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4 flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600">Địa chỉ giao hàng:</p>
                        <p className="font-medium">{order.shippingAddress}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Tổng cộng:</p>
                        <p className="text-xl font-bold text-primary">
                          {formatPrice(order.total)}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
