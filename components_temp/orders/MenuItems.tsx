import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Star } from "lucide-react";
import { motion } from "framer-motion";
import { MenuItem } from "@/types";

interface MenuItemsProps {
  onAddToCart: (item: MenuItem) => void;
}

const MENU_ITEMS = [
  {
    category: "North Indian",
    items: [
      { name: "Butter Chicken", price: 280, rating: 4.5, time: "25-30 min", veg: false },
      { name: "Dal Makhani", price: 220, rating: 4.3, time: "20-25 min", veg: true },
      { name: "Paneer Butter Masala", price: 240, rating: 4.4, time: "20-25 min", veg: true },
      { name: "Biryani Chicken", price: 320, rating: 4.6, time: "30-35 min", veg: false }
    ]
  },
  {
    category: "South Indian",
    items: [
      { name: "Masala Dosa", price: 140, rating: 4.2, time: "15-20 min", veg: true },
      { name: "Idli Sambar (4 pcs)", price: 100, rating: 4.1, time: "10-15 min", veg: true },
      { name: "Rava Uttapam", price: 120, rating: 4.0, time: "15-20 min", veg: true }
    ]
  },
  {
    category: "Chinese",
    items: [
      { name: "Hakka Noodles", price: 180, rating: 4.3, time: "20-25 min", veg: true },
      { name: "Chicken Manchurian", price: 260, rating: 4.4, time: "25-30 min", veg: false },
      { name: "Fried Rice", price: 160, rating: 4.1, time: "20-25 min", veg: true }
    ]
  }
];

export default function MenuItems({ onAddToCart }: MenuItemsProps) {
  return (
    <Card className="shadow-lg border-0">
      <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
        <CardTitle>Menu Items</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-8">
          {MENU_ITEMS.map((category, categoryIndex) => (
            <div key={category.category}>
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                  >
                    <Card className="border hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold flex items-center gap-2">
                              {item.name}
                              <Badge variant={item.veg ? "secondary" : "destructive"} className="text-xs">
                                {item.veg ? "VEG" : "NON-VEG"}
                              </Badge>
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm text-gray-600">{item.rating}</span>
                              </div>
                              <span className="text-gray-300">•</span>
                              <span className="text-sm text-gray-600">{item.time}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg text-gray-800">₹{item.price}</p>
                          </div>
                        </div>
                        <Button 
                          className="w-full bg-orange-500 hover:bg-orange-600"
                          onClick={() => onAddToCart(item)}
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}