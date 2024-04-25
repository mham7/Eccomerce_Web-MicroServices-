export async function getProductList() {
    try {
      const response = await fetch('https://ayeshaalidesign-test-5a6e676276ea.herokuapp.com/api/product');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Error fetching products:', error.message);
      return []; 
    }
  }