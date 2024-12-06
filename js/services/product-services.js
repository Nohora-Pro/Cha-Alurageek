const baseUrl = "http://localhost:3000/products";

// Obtener lista de productos
const productList = async () => {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) throw new Error("Error al obtener los productos");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Crear producto
const createProduct = async (name, price, image) => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price, image }),
    });
    if (!response.ok) throw new Error("Error al crear el producto");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// Eliminar producto
const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar el producto");
  } catch (error) {
    console.error(error);
  }
};

export const servicesProducts = {
  productList,
  createProduct,
  deleteProduct,
};
