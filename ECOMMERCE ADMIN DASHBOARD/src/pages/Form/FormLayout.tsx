import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { API } from '../../http';
import { AddProduct, addProduct } from '../../store/dataSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Status } from '../../types/status';
import { useNavigate } from 'react-router-dom';

interface Category {
  categoryName: string;
  id: string;
}



const FormLayout = () => {
  const { status } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();


  const [categories, setCategories] = useState<Category[]>([]);

  const [data, setData] = useState<AddProduct>({
    productName: '',
    categoryId: '',
    image: null,
    productDescription: '',
    productPrice: 0,
    productTotalStockQty: 0,
  });



  const fetchCategories = async () => {
    const response = await API.get('admin/category');
    if (response.status === 200) {
      setCategories(response.data.data);
    }
  };



  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setData({
      ...data,
      [name]: name === 'image' ? files?.[0] : value,
    });
  };



  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(addProduct(data));
    if (status === Status.SUCCESS) {
      navigate('/tables');
    } else {
      navigate('/forms/form-layout');
    }
  };




  useEffect(() => {
    fetchCategories();
  }, []);



  console.log(categories);

  return (
    <>
      <Breadcrumb pageName="Form Layout" />

      <div className="flex items-center justify-center h-screen overflow-hidden">
        <div
          className="bg-white w-full lg:w-9/12 md:w-6/12 shadow-3xl"
          style={{ marginTop: '-200px' }}
        >
          <form className="p-3 md:p-5" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="productName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Product Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="productName"
                id="productName"
                className="w-full text-black bg-gray-200 md:py-2 focus:outline-none"
                placeholder="Sample Product"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="productDescription"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Product Description
              </label>
              <textarea
                onChange={handleChange}
                name="productDescription"
                id="productDescription"
                className="w-full text-black bg-gray-200 md:py-2 focus:outline-none"
                placeholder="This is a sample product description."
              />
            </div>
            <div className="flex justify-between mb-6">
              <div className="w-1/2 pr-2">
                <label
                  htmlFor="productPrice"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Product Price
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  name="productPrice"
                  id="productPrice"
                  className="w-full text-black bg-gray-200 md:py-2 focus:outline-none"
                  placeholder="100"
                />
              </div>
              <div className="w-1/2 pl-2">
                <label
                  htmlFor="productStockQty"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Product Stock Quantity
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  name="productTotalStockQty"
                  id="productStockQty"
                  className="w-full bg-gray-200 text-black md:py-2 focus:outline-none"
                  placeholder="50"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="productImage"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Product Image
              </label>
              <input
                onChange={handleChange}
                type="file"
                name="image"
                id="productImage"
                className="w-full bg-gray-200  text-black md:py-2 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="productStatus"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Product Status
              </label>
              <select
                id="productStatus"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="categoryId"
                onChange={handleChange}
              >
                {categories?.length > 0 &&
                  categories.map((category) => {
                    return <option key={category.id} value={category.id}>{category.categoryName}</option>;
                  })}
              </select>
            </div>
            <button className="w-full p-2 font-medium text-white uppercase bg-gradient-to-b from-gray-700 to-gray-900 md:p-4">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormLayout;
