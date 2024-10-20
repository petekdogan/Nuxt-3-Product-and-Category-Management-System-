<template>
  <div class="flex items-start justify-center h-screen mb-6 mt-5 p-4 my-2" >
    <ul class="space-y-6">
      <li v-for="category in categories" :key="category.id" class="bg-stone-300 p-4 rounded-lg shadow-md">
        <div class="flex justify-between items-center mb-4">
          <span class="text-xl font-semibold">{{ category.name }}</span>
          <div>
            <button @click="editCategory(category)" class="ml-2 px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
              Kategori Güncelle
            </button>
            <button @click="deleteCategory(category.id)" class="ml-2 px-3 py-1 bg-green-800 text-white rounded hover:bg-green-900 transition">
              Kategori Sil
            </button>
          </div>
        </div>


        <!-- Ürünler Listesi -->
        <ul class="ml-4 mt-2 space-y-2">
          <li v-for="product in category.products" :key="product.id" class="flex items-center justify-between bg-gray-100 p-2 rounded">
            <span>{{ product.name }} - {{ product.price }}₺ - {{ product.description }}</span>
            <div>
              <button @click="editProduct(product)" class="ml-2 px-2 py-1 bg-pink-800 text-white rounded hover:bg-pink-600 transition">Güncelle</button>
              <button @click="deleteProduct(product.id)" class="ml-2 px-2 py-1 bg-stone-500 text-white rounded hover:bg-stone-400 transition">Sil</button>
            </div>
          </li>
        </ul>

        <!-- Yeni Ürün Ekleme -->
        <div class="ml-4 mt-4">
          <button @click="toggleProductForm(category.id)" class="px-3 py-1 bg-stone-500 text-white rounded hover:bg-stone-600">
            Yeni Ürün Ekle
          </button>
        </div>

        <div v-if="showProductFormId === category.id" class="ml-4 mt-2 bg-gray-100 p-4 rounded shadow">
          <h3 class="text-lg font-bold">Yeni Ürün Ekle</h3>
          <input v-model="newProduct.name" placeholder="Ürün Adı" class="border px-2 py-1 rounded mb-2">
          <input v-model.number="newProduct.price" placeholder="Fiyat" type="number" class="border px-2 py-1 rounded mb-2">
          <input v-model="newProduct.description" placeholder="Açıklama" class="border px-2 py-1 rounded mb-2">
          <button @click="addProduct(category.id)" class="ml-2 px-3 py-1 bg-blue-400 text-white rounded">
            Ekle
          </button>
        </div>
        </li>

       <!-- Çıkış Yapma -->
       <button
      @click="handleSignOut"
      class="mt-4 py-2 px-4 bg-green-800 hover:bg-green-600 text-white font-semibold rounded-md transition duration-300 ease-in-out"
    >
      Çıkış Yap
    </button>

    <!-- Yeni Kategori Ekle -->
    <button @click="toggleForm" class="px-4 py-2 mx-2 my-2 bg-yellow-200 text-black rounded  hover:bg-yellow-100">
    Yeni Kategori Ekle
  </button>
   </ul>
   
  <div v-if="showForm" class="mt-4 my-4">
    <input v-model="newCategory.name" placeholder="Kategori Adı" class="border px-3 py-2 rounded mb-2 w-full">
    <button @click="addCategory" class=" px-4 py-2 bg-pink-900 text-white rounded">
      Kategoriyi Kaydet
    </button>
      
    </div>

    <!-- Kategori Güncelleme  -->
    <div v-if="selectedCategory" class="mt-6 bg-white p-4 rounded-lg shadow-md">
      <h2 class="text-xl">Kategori Güncelle</h2>
      <input v-model="selectedCategory.name" placeholder="Kategori Adı" class="border px-2 py-1 rounded mb-2">
      <button @click="updateCategory" class="ml-2 px-3 py-1 bg-blue-400 text-white rounded hover:bg-blue-500 transition">Güncelle</button>
    </div>

    <!-- Ürün Güncelleme  -->
    <div v-if="selectedProduct" class="mt-6 bg-white p-4 rounded-lg shadow-md">
      <h2 class="text-xl">Ürün Güncelle</h2>
      <div class="flex flex-col space-y-2">
        <input v-model="selectedProduct.name" placeholder="Ürün Adı" class="border px-2 py-1 rounded mb-2">
        <input v-model.number="selectedProduct.price" placeholder="Fiyat" type="number" class="border px-2 py-1 rounded mb-2">
        <input v-model="selectedProduct.description" placeholder="Açıklama" class="border px-2 py-1 rounded mb-2">
        <button @click="updateProduct" class="ml-2 px-3 py-1 bg-blue-400 text-white rounded hover:bg-blue-500 transition">Güncelle</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const categories = ref([]);
const selectedCategory = ref(null);
const selectedProduct = ref(null);
const newProduct = ref({ name: "", price: 0, description: "" });
const showForm = ref(false); 
const newCategory = ref({ name: "" });
const showProductFormId = ref(null);


const fetchCategories = async () => {
  try {
    const response = await axios.get('/api/categories');
    categories.value = response.data;
  } catch (error) {
    console.error('Kategorileri alırken hata:', error);
  }
};

onMounted(fetchCategories);

const editCategory = (category) => {
  selectedCategory.value = { ...category };
};

const toggleForm = () => {
  showForm.value = !showForm.value; 
};

const addCategory = async () => {
  try {
    if (newCategory.value.name.trim() === "") {
      alert("Lütfen geçerli bir kategori adı girin.");
      return;
    }
    await axios.post('/api/categories', newCategory.value); 
    newCategory.value = { name: "" }; 
    showForm.value = false; 
    await fetchCategories(); 
  } catch (error) {
    console.error('Yeni kategori eklerken hata:', error);
  }
};

const toggleProductForm = (categoryId) => {
  showProductFormId.value = showProductFormId.value === categoryId ? null : categoryId;
};

const updateCategory = async () => {
  try {
    await axios.put(`/api/categories/${selectedCategory.value.id}`, { name: selectedCategory.value.name });
    await fetchCategories();
    selectedCategory.value = null;
  } catch (error) {
    console.error('Kategori güncellerken hata:', error);
  }
};

const deleteCategory = async (id) => {
  try {
    await axios.delete(`/api/categories/${id}`);
    await fetchCategories();
  } catch (error) {
    console.error('Kategori silerken hata:', error);
  }
};

const editProduct = (product) => {
  selectedProduct.value = { ...product };
};

const updateProduct = async () => {
  try {
    await axios.put(`/api/products/${selectedProduct.value.id}`, { 
      name: selectedProduct.value.name, 
      price: selectedProduct.value.price, 
      description: selectedProduct.value.description 
    });
    await fetchCategories();
    selectedProduct.value = null;
  } catch (error) {
    console.error('Ürünü güncellerken hata:', error);
  }
};

const deleteProduct = async (id) => {
  try {
    await axios.delete(`/api/products/${id}`);
    await fetchCategories();
  } catch (error) {
    console.error('Ürünü silerken hata:', error);
  }
};

const addProduct = async (categoryId) => {
  try {
    const productToAdd = { ...newProduct.value, categoryId };
    await axios.post('/api/products', productToAdd);
    newProduct.value = { name: "", price: 0, description: "" };
    await fetchCategories();
  } catch (error) {
    console.error('Yeni ürün eklerken hata:', error);
  }
};

function handleSignOut() { 
  navigateTo('/login');
}

definePageMeta({
  middleware: 'auth',
});




</script>
