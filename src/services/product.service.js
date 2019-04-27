import axios from './index.service';

export default class ProductService {
  static getFeaturedProducts() {
    return axios.get(`/featured`);
  }

  static getAllProducts(search = '', page = 1, limit = 12) {
    return axios.get(`/products?page=${page}&search=${search}&limit=${limit}`);
  }

  static getAllProductsInCategory(category, page = 1, limit = 12) {
    const categories = {
      french: 1,
      italian: 2,
      irish: 3,
      animal: 4,
      flower: 5,
      christmas: 6,
      valentine: 7,
    };
    const categoryId = categories[category];
    if (!categoryId) return ProductService.getAllProducts();

    return axios.get(
      `/products/in-category/${categoryId}?page=${page}&limit=${limit}`
    );
  }

  static getAllProductsInDepartment(department, page = 1, limit = 12) {
    const departments = {
      regional: 1,
      nature: 2,
      seasonal: 3,
    };
    const departmentId = departments[department];
    if (!departmentId) return ProductService.getAllProducts();

    return axios.get(
      `/products/in-department/${departmentId}?page=${page}&limit=${limit}`
    );
  }

  static getProductDetails(productId) {
    return axios.get(`/products/${productId}`);
  }
}
